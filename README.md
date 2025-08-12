# Vision-Market

**Vision-Market** is a project to... (briefly describe the project's purpose).

This repository is designed to be highly accessible for both human and AI collaborators. It follows a standardized structure to ensure that all participants can easily locate resources, understand project status, and contribute effectively.

## Quick Start

- **For Humans:** Start with this `README.md` to understand the project layout and then dive into the `docs/` directory for detailed documentation.
- **For AI Agents:** The primary entry point is `project.manifest.yaml`, which provides a machine-readable map of all key project resources.

## Directory Structure

```
/
├── .ai/                  # AI-specific configurations, prompts, and context templates.
├── data/                 # Datasets, training/evaluation data.
├── docs/                 # Project documentation.
│   ├── adrs/             # Architecture Decision Records.
│   └── agents/           # Charters for AI agents collaborating on this project.
├── notebooks/            # Jupyter notebooks for exploration and analysis.
├── scripts/              # Automation scripts.
├── src/                  # Source code.
├── tests/                # Unit, integration, and end-to-end tests.
├── project.manifest.yaml # Machine-readable index of all project resources.
└── README.md             # This file.
```

## Key Resources

- **Agent Charters:** See `docs/agents/` for the roles and responsibilities of the AI agents working on this project.
- **Architecture Decisions:** See `docs/adrs/` for key technical decisions.
- **Data:** All project data is described in `data/data.manifest.yaml`.

For a complete, machine-readable list of all project resources, refer to `project.manifest.yaml`.
