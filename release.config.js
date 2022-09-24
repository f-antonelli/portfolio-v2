module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/f-antonelli/portfolio-v2",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
