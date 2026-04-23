import 'dotenv/config';
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

const userQuery = async (req, res) => {
    const API_KEY = process.env.OMDB_API_KEY;

    try {
        const { description, language, industry } = req.body;

        const prompt = `Suggest 3 movies based on:
Mood: ${description}
Language: ${language}
Industry: ${industry}

Return only JSON like:
["movie1","movie2","movie3"]`;
        const response = await client.responses.create({
            model: "openai/gpt-oss-20b",
            input: prompt,
        });
        const text = response.output_text || "";
        let movies = [];
        try {
            const cleaned = text
                .replace(/```json/g, "")
                .replace(/```/g, "")
                .trim();

            movies = JSON.parse(cleaned);

        } catch {
            movies = text
                .replace(/```json/g, "")
                .replace(/```/g, "")
                .split("\n")
                .map(m => m.replace(/[\[\]",]/g, "").trim())
                .filter(Boolean);
        }
        
        try {
            const results = await Promise.all(
                movies.map(movie =>
                    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(movie)}&plot=full`)
                        .then(res => res.json())
                )
            );
            let allMovies = [];
            results.forEach(data => {
                if (data.Response === "True") {
                    allMovies.push(data);
                }
            });
            console.log("AI Movie details:", allMovies);
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