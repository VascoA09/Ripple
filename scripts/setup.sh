#!/bin/bash

# -----------------------------------------------------------------------------
# Ripple setup script
# Scaffolds a new React + TypeScript project with Ripple pre-configured.
# Usage: bash setup.sh [project-name]
# -----------------------------------------------------------------------------

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

log()    { echo -e "${BLUE}→${NC} $1"; }
success(){ echo -e "${GREEN}✓${NC} $1"; }
warn()   { echo -e "${YELLOW}!${NC} $1"; }
error()  { echo -e "${RED}✗${NC} $1"; exit 1; }

# -----------------------------------------------------------------------------
# Project name
# -----------------------------------------------------------------------------
PROJECT_NAME="${1:-my-ripple-app}"

echo ""
echo -e "${BLUE}Ripple setup${NC} — scaffolding: ${PROJECT_NAME}"
echo ""

# -----------------------------------------------------------------------------
# 1. Scaffold Vite project
# -----------------------------------------------------------------------------
log "Scaffolding Vite React + TypeScript project..."
npm create vite@latest "$PROJECT_NAME" -- --template react-ts --yes 2>/dev/null || \
  npm create vite@latest "$PROJECT_NAME" -- --template react-ts
cd "$PROJECT_NAME"
success "Project scaffolded"

# -----------------------------------------------------------------------------
# 2. Install base dependencies
# -----------------------------------------------------------------------------
log "Installing base dependencies..."
npm install --legacy-peer-deps
success "Base dependencies installed"

# -----------------------------------------------------------------------------
# 3. Install Ripple
# -----------------------------------------------------------------------------
log "Installing Ripple..."
npm install github:VascoA09/Ripple --legacy-peer-deps
success "Ripple installed"

# -----------------------------------------------------------------------------
# 4. Update main.tsx
# -----------------------------------------------------------------------------
log "Configuring main.tsx..."
cat > src/main.tsx << 'EOF'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@ripple/ui/style.css'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div data-theme="light" style={{ minHeight: '100svh' }}>
      <App />
    </div>
  </StrictMode>
)
EOF
success "main.tsx configured"

# -----------------------------------------------------------------------------
# 5. Replace template CSS with Ripple reset
# -----------------------------------------------------------------------------
log "Replacing template CSS..."
cat > src/index.css << 'EOF'
/* Ripple reset — do not add :root variables here, they conflict with Ripple tokens */
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: var(--font-family-base); color: var(--text); background: var(--bg-canvas); -webkit-font-smoothing: antialiased; }
#root { min-height: 100svh; }
EOF

cat > src/App.css << 'EOF'
/* Add prototype-specific styles here — do not redefine Ripple tokens */
EOF
success "Template CSS replaced"

# -----------------------------------------------------------------------------
# 6. Write a starter App.tsx
# -----------------------------------------------------------------------------
log "Writing starter App.tsx..."
cat > src/App.tsx << 'EOF'
import { Button, TextInput, Tag, Badge } from '@ripple/ui'

export default function App() {
  return (
    <div style={{ padding: 'var(--spacing-200)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-150)' }}>
      <h1 style={{ margin: 0, fontFamily: 'var(--font-family-base)', fontSize: 'var(--font-size-500)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-loud)' }}>
        Ripple app
      </h1>

      <div style={{ display: 'flex', gap: 'var(--spacing-50)' }}>
        <Button variant="fill">Primary</Button>
        <Button variant="outline">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      <div style={{ display: 'flex', gap: 'var(--spacing-50)', alignItems: 'center' }}>
        <Tag color="blue">Design</Tag>
        <Tag color="green">System</Tag>
        <Badge color="primary">3</Badge>
      </div>

      <TextInput label="Text input" placeholder="Type something..." />
    </div>
  )
}
EOF
success "App.tsx written"

# -----------------------------------------------------------------------------
# Done
# -----------------------------------------------------------------------------
echo ""
echo -e "${GREEN}Ripple is ready.${NC}"
echo ""
echo "  cd $PROJECT_NAME"
echo "  npm run dev"
echo ""
echo "  Components:  import { Button, Tag, ... } from '@ripple/ui'"
echo "  Styles:      already imported in main.tsx"
echo "  Tokens:      use var(--spacing-100), var(--text), var(--bg-surface), ..."
echo "  Docs:        https://github.com/VascoA09/Ripple/blob/main/SETUP.md"
echo ""
