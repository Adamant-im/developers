---
title: Task Management
---

# Task Management

We use **Trello** to manage tasks and track progress for the ADAMANT Messenger project.

- Trello Board: [PWA](https://trello.com/b/tbpQhTTM/pwa)
- Slack Channel: [#private-dev-pwa](https://app.slack.com/client/T7YMKRUJW/C052503LDQT)

## Trello Board Columns

Below is a description of each column on our Trello board and its purpose:

| **Column**     | **Description**                                                          |
| -------------- | ------------------------------------------------------------------------ |
| **Backlog**    | Ideas or tasks that are not yet prioritized.                             |
| **To Do**      | Tasks that have been selected for the current cycle but are not started. |
| **In Process** | Tasks that are actively being worked on by developers.                   |
| **On Review**  | Completed tasks waiting for code review.                                 |
| **Testing**    | Tasks undergoing quality assurance testing.                              |
| **Tested**     | Successfully tested tasks, ready for release.                            |
| **Released**   | Tasks that are deployed and live in production.                          |

## Responsibility for Moving Tasks

| **Column**     | **Who Moves the Task** | **When to Move the Task**                                           |
| -------------- | ---------------------- | ------------------------------------------------------------------- |
| **Backlog**    | Team Lead              | When a new task or idea is created.                                 |
| **To Do**      | Team Lead              | When prioritizing tasks for the current cycle.                      |
| **In Process** | Developer              | When starting work on a task.                                       |
| **On Review**  | Developer              | When the task's code is complete and ready for review.              |
| **Testing**    | Team Lead              | When the code review is approved and the task is ready for testing. |
| **Tested**     | Tester                 | When the task has passed all testing criteria.                      |
| **Released**   | Team Lead              | After deployment to production.                                     |

## General Guidelines

- **Developers**:
  - Ensure the task description is clear and you have all the necessary information before moving the task to **In Process**.
  - After completing the work:
    - Open a PR and add `bludnic` as a reviewer.
    - Link the Trello task to the PR on GitHub.
    - Move the task to **On Review**.
    - _(Optional)_ Post a message in the [#private-dev-pwa](https://app.slack.com/client/T7YMKRUJW/C052503LDQT) Slack channel to speed up the reviewing process.
- **Team Lead**:
  - Prioritizing tasks from **Backlog** to **To Do**.
  - Regularly review tasks in **On Review** and move them to **Testing** after the PR is approved.
  - If a PR requires changes, move the task back to **In Process** so the developer can fix the issues.
  - After a PR is approved, merge it into `dev` and move the task to **Testing**.
  - After releasing to production (`dev` → `master`), move all accumulated tasks from **Tested** to **Released**.
- **Testers**:
  - Update the task status with testing notes after testing.
  - If testing fails, move the task back to **In Process**.
  - Move the task to **Tested** when all tests passed.

By following this workflow, we ensure clarity and accountability for every task on the Trello board.

---

## Communication Guidelines

- **For Code Issues**: Use the comments within the PR.
- **For Testing Issues**: Communicate directly in Trello.
- **Other Discussions**: Use the [#private-dev-pwa](https://app.slack.com/client/T7YMKRUJW/C052503LDQT) Slack channel as needed.

By adhering to these guidelines, we streamline the workflow and maintain efficient communication within the team.
