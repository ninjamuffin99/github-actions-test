const core = require('@actions/core');

try {
  // Get the inputs from the workflow file: 
  const input = core.getInput('my_input', { required: true });

  console.log(`Hello, ${input}!`);
  
  // Set the output for other steps or the workflow
  core.setOutput('my_output', `Hi there, ${input}.`);
} catch (error) {
  core.setFailed(error.message);
}
