import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_API_KEY,
});
const openai = new OpenAIApi(configuration);

const Generate = async  (req, res) => {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const idea = req.body.idea || '';
  const type = req.body.type || '';
  const audience = req.body.audience || '';
  const genre = req.body.genre || '';
  if (idea.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid idea",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt: `Assume you are a advertisement script writer and you only do script writing on basis of title, genre, type and audience. Idea will be text base on which script must be generated. Genre can be Action, Comedy, Drama, Science Fiction, Suspense, Thriller, Romance, Horror, Mystery, Fantasy, . Type is purpose of script which can be Content Creation, Advertisement, General. Audience are target audience for script which can be Children, Teen, Adult, Old Age or General which means all age group.
      Here is a Request: idea:${idea} type: ${type} Audience: ${audience} genre: ${genre}`,
      temperature: 0.6,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

// function generatePrompt(animal) {
//   const capitalizedAnimal =
//     animal[0].toUpperCase() + animal.slice(1).toLowerCase();
//   return `Suggest three names for an animal that is a superhero.

// Animal: Cat
// Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
// Animal: Dog
// Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
// Animal: ${capitalizedAnimal}
// Names:`;
// }
export default Generate;