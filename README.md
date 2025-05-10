# Emily - AI Code Assistant

Emily is an intelligent code assistant that helps developers understand and navigate their codebase through natural language interactions. It provides real-time AI-powered code analysis and assistance, making it easier to work with complex codebases.

## Features

### Current Features

- **Smart Code Search**: Ask questions about your codebase in natural language and get relevant answers with code references
- **Project Management**: Create and manage multiple projects with an intuitive sidebar interface
- **Code Context**: View related code snippets and file references for better understanding
- **Modern UI**: Clean and responsive interface built with Next.js and Tailwind CSS
- **Real-time Streaming**: Stream AI responses in real-time as they are generated
- **Save & Reference**: Save important questions and answers for future reference
- **Code Highlighting**: Syntax highlighting for code snippets with support for multiple languages
- **Markdown Support**: Rich text formatting for AI responses
- **Project History**: Access your previous questions and answers for each project
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### Coming Soon

- **GitHub Integration**: Direct integration with GitHub repositories
- **Meeting Assistant**: AI-powered meeting notes and action items tracking
- **Code Review**: Automated code review suggestions
- **Team Collaboration**: Share projects and insights with team members
- **Custom AI Models**: Choose from different AI models for specific use cases
- **API Access**: Programmatic access to Emily's capabilities
- **VS Code Extension**: Direct integration with VS Code
- **Code Generation**: AI-powered code generation and refactoring
- **Documentation Generation**: Automatic documentation generation from code
- **Performance Analysis**: Code performance insights and suggestions

## Tech Stack

- **Frontend**:
  - Next.js 14
  - React 18
  - Tailwind CSS
  - TypeScript
- **UI Components**:
  - Radix UI
  - Shadcn UI
  - Custom components
- **Code Highlighting**: React Syntax Highlighter
- **Markdown Support**: React MD Editor
- **State Management**: React Hooks & Context
- **API**: tRPC
- **Authentication**: Built-in auth system
- **Database**: Prisma with PostgreSQL + pg-vector
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide Icons

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/emily-ai.git
   cd emily-ai
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:

   ```
   DATABASE_URL="your_database_url"
   NEXTAUTH_SECRET="your_nextauth_secret"
   NEXTAUTH_URL="http://localhost:3000"
   OPENAI_API_KEY="your_openai_api_key"
   ```

4. Run database migrations:

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── (protected)/       # Protected routes
│   └── api/              # API routes
├── components/            # Reusable UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
├── server/               # Server-side code
├── styles/              # Global styles
└── trpc/                # tRPC router and procedures
```

## Usage

1. **Create a Project**

   - Click "New Project" in the sidebar
   - Enter project details and select your codebase

2. **Ask Questions**

   - Use the question card to ask about your code
   - Emily will analyze your codebase and provide relevant answers
   - View code references and explanations in real-time

3. **Save & Reference**

   - Save important Q&As for future reference
   - Access your project history anytime
   - Share insights with team members

4. **Project Management**
   - Switch between projects using the sidebar
   - Manage project settings and configurations
   - View project statistics and insights


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please:

- Open an issue on GitHub
- Join our Discord community
- Check our documentation



Built with ❤️ by the Emily AI Dad : Shams
