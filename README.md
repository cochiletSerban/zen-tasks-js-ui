# ZenTasks JS UI

## Project Requirements

Implement the **Inbox**, **Project**, and **Important Task** pages as shown in the [Figma design](https://www.figma.com/design/hDIP0AP1NRVMJj7X2FiHLh/ZenTask-UI-v1?node-id=0-1&m=dev&t=pjvuw8Bkpt5WbhdO-1).

### First Development Stage: Read-Only View

In the initial phase, the application will only support a **read-only view**. This means:

- Data will be **retrieved** from the API and displayed in the UI.
- No creation, editing, or deletion of tasks will be implemented yet.

### Fetching Data

- Data retrieval will be handled using the **JavaScript [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API**.
- The application should request and display **tasks** and **projects** from the API.

### Core Components

The two main UI components of the application are:

1. **Todo Card** – Represents individual tasks.
2. **Project Card** – Represents project groupings.

These components should be **reusable**, meaning they should be implemented in a way that allows them to be used across multiple pages without code duplication.

### Code Structure and Best Practices

- **Separation of Concerns**:

  - **DOM manipulation**, **data fetching**, and **element retrieval** should be handled in their respective modules/files.
  - Follow the provided code examples to ensure a clean and maintainable structure.

- **Styling Guidelines**:
  - **Avoid inline styles**. Instead, use the predefined classes from **helper-classes.css** or global CSS variables from the `:root` section in **styles.css**.
  - Since there is no style encapsulation, all css classes should use the **[BEM](https://css-tricks.com/bem-101/)** naming convention.
  - **Flexbox** should be used for page layout to ensure responsiveness.

## Running the Project

This project uses JavaScript **modules** to allow `import` and `export` statements. Because of this, it **must** be served via an HTTP server.

### Recommended Setup

The easiest way to run the project is using the **Live Server** extension in VS Code:

1. Install **Live Server** by Ritwick Dey.
2. Right-click on `index.html` → _Open with Live Server_.

This will launch the project in your default browser.

---
