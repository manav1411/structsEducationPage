async function fetchQuestions(topic: string, count: number, difficulty: string) {
  const endpoint = 'https://api.openai.com/v1/chat/completions';
  const payload = {
    model: 'gpt-3.5-turbo-1106',
    messages: [{ role: 'user', content: `give me ${count} ${difficulty} questions about ${topic} in a JSON-like format. Example: [{"text": "What is the time complexity of accessing an element in an array by its index?", "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"], "answerIndex": 0, "answerExplanation": "Accessing an element in an array by its index has a time complexity of O(1), because the index can be used to directly access its memory location."}]`}],
    temperature: 0.5
  };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    const formattedResponse = JSON.parse(data.choices[0].message.content);
    return formattedResponse;
  }

async function evaluateShortAnswer(question: string, userAnswer: string) {
  const endpoint = 'https://api.openai.com/v1/chat/completions';
  const prompt = `:`;

  const payload = {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: `Question: ${question}\nAnswer: ${userAnswer}\n\nEvaluate the answer on a scale of 0 to 5 and provide insights (less than 20 words), in this format: {"mark": Evaluation, "analysis: "insight"}, e.g. {"mark": 2, "analysis": "this is correct since it is a linked list"}. remember that mark is an int.`}],
    temperature: 1.0
  };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer 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`
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(payload)
  });

  const data = await response.json();
  console.log("this is the response sent: " + data.choices[0].message.content)
  return data.choices[0].message.content;
}

export { fetchQuestions, evaluateShortAnswer };
