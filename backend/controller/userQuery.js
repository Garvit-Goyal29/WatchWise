import 'dotenv/config';
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

const userQuery = async (req, res) => {
    const API_KEY = process.env.OMDB_API_KEY;
    const GROQ_KEY = process.env.GROQ_API_KEY;

    if (!API_KEY || !GROQ_KEY) {
        console.error("CRITICAL: Missing API Keys in .env");
        return res.status(500).json({ error: "Server configuration error: Missing API keys" });
    }

    try {
        const { description, language, industry } = req.body;
        console.log("Request received:", { description, language, industry });

        const prompt = `Return ONLY a JSON array of 5 movie titles based on:
Mood: ${description}
Language: ${language}
Industry: ${industry}
Format: ["Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5"]`;

        const response = await client.chat.completions.create({
            model: "llama-3.1-8b-instant",
            messages: [
                { role: "system", content: "You are a movie recommendation assistant. You MUST return ONLY a JSON array of strings. No conversational text." },
                { role: "user", content: prompt }
            ],
        });

        const text = response.choices[0]?.message?.content || "";
        console.log("AI Response Text:", text);

        let movies = [];
        try {
            const cleaned = text
                .replace(/```json/g, "")
                .replace(/```/g, "")
                .trim();

            movies = JSON.parse(cleaned);

        } catch (err) {
            console.log("JSON Parse failed, trying regex fallback");
            // Try to find anything that looks like an array [ ... ]
            const arrayMatch = text.match(/\[.*\]/s);
            if (arrayMatch) {
                try {
                    movies = JSON.parse(arrayMatch[0]);
                } catch (e) {
                    const matches = arrayMatch[0].match(/"([^"]+)"/g);
                    if (matches) {
                        movies = matches.map(m => m.replace(/"/g, ""));
                    }
                }
            }

            if (movies.length === 0) {
                const matches = text.match(/"([^"]+)"/g);
                if (matches) {
                    movies = matches.map(m => m.replace(/"/g, ""));
                } else {
                    movies = text
                        .split(/\n|,/)
                        .map(m => m.replace(/^\d+\.\s*/, "").replace(/[\[\]"]/g, "").trim())
                        .filter(Boolean);
                }
            }
        }

        console.log("Extracted Movies:", movies);

        if (!movies || movies.length === 0) {
            return res.json({ movies: [], message: "No movies found by AI" });
        }

        try {
            const results = await Promise.all(
                movies.slice(0, 4).map(movie =>
                    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(movie)}&plot=full`)
                        .then(res => res.json())
                )
            );

            console.log("OMDB Results count:", results.length);

            let allMovies = [];
            results.forEach((data, index) => {
                if (data.Response === "True") {
                    allMovies.push(data);
                } else {
                    console.log(`OMDB error for movie "${movies[index]}":`, data.Error);
                }
            });

            console.log("Final movies count:", allMovies.length);

            res.json({
                movies: allMovies
            });

        } catch (error) {
            console.log("error in 2nd api call : ", error);
            res.status(500).json({ error: "Failed to fetch movie details from OMDB" });
        }

    } catch (err) {
        console.log("SERVER ERROR:", err);
        res.status(500).json({ error: "Something went wrong" });
    }
};
export default userQuery;