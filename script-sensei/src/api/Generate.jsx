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

  const key_value = req.body.key_value || '';
  const product_name = req.body.product_name || '';
  const product_desc = req.body.product_desc || '';
  const company_name = req.body.company_name || '';
  const audience = req.body.audience || '';
  const cta = req.body.cta || '';
  const duration = req.body.duration || '';
  const tone = req.body.tone || '';
  const other = req.body.other || '';

  if (key_value.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid idea",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `As an experienced script writer, generate a compelling advertisement script and post for a ${duration} seconds ad promoting ${company_name} by ${product_name}. The target audience is ${audience}. Focus on the key message or value proposition: ${key_value}. Highlight the following features: ${product_desc}. Maintain a ${tone} tone that aligns with ${company_name}'s brand identity. End the script with a strong call-to-action (CTA) prompting viewers to ${cta}. ${other}, write post for all the social media platform(s) for the advertisement's post.`,
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

// Generate a persuasive [advertisement length] script promoting [product name] by [company name]. The target audience is [target audience description]. The key message: [key message or value proposition]. Highlight specific features/benefits: [specific features or benefits]. The tone/style should be [serious, humorous, emotional, etc.], aligned with [company name]'s brand. Conclude with a strong CTA to [CTA action]. Any additional info or requirements: [additional requirements].

// Craft an engaging script that captures attention, prompts action, and reflects [company name]'s brand. Your creativity is key.


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