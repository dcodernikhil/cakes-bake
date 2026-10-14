
#!/usr/bin/env bash

set -e

# ==========================================
# Cakes & Bake — Project Setup
# React + Vite + Tailwind CSS 3.x + FastAPI
# ==========================================

# 1. Initialize React + Vite frontend
npm create vite@latest frontend -- --template react

cd frontend

# 2. Install frontend dependencies
npm install

npm install react-router-dom react-icons react-hook-form zod @hookform/resolvers

npm install -D tailwindcss@3 postcss autoprefixer

npx tailwindcss init -p

# 3. Create frontend folders
mkdir -p public/images/products public/images/branding

mkdir -p src/assets
mkdir -p src/components/{common,layout,navigation,home,products,categories,cart,checkout,forms,chatbot,ui}
mkdir -p src/pages
mkdir -p src/context
mkdir -p src/hooks
mkdir -p src/services
mkdir -p src/data
mkdir -p src/utils
mkdir -p src/config
mkdir -p src/constants
mkdir -p src/routes

cd ..

# 4. Initialize FastAPI backend structure
mkdir -p backend/app/{api/routes,core,models,schemas,services,repositories,data,utils,middleware,agents,prompts,integrations}
mkdir -p backend/tests/{api,services,agents}
mkdir -p backend/uploads/{product_images,custom_cake_references}

# 5. Create backend files
touch backend/app/__init__.py
touch backend/app/main.py

touch backend/app/api/__init__.py
touch backend/app/api/routes/__init__.py
touch backend/app/api/routes/health.py
touch backend/app/api/routes/products.py
touch backend/app/api/routes/categories.py
touch backend/app/api/routes/enquiries.py
touch backend/app/api/routes/chatbot.py

touch backend/app/core/{__init__.py,config.py,cors.py}
touch backend/app/models/{__init__.py,product.py,enquiry.py}
touch backend/app/schemas/{__init__.py,product.py,enquiry.py,chatbot.py}
touch backend/app/services/{__init__.py,product_service.py,enquiry_service.py,chatbot_service.py,whatsapp_service.py}
touch backend/app/repositories/{__init__.py,product_repository.py,enquiry_repository.py}
touch backend/app/data/{__init__.py,products.py,categories.py,faqs.py}
touch backend/app/utils/{__init__.py,validators.py}
touch backend/app/middleware/__init__.py
touch backend/app/agents/{__init__.py,bakery_agent.py,product_recommender.py,order_assistant.py}
touch backend/app/integrations/{__init__.py,ai_provider.py,whatsapp.py}

touch backend/app/prompts/system_prompt.txt
touch backend/app/prompts/order_prompt.txt

touch backend/tests/__init__.py
touch backend/tests/api/{__init__.py,test_products.py,test_enquiries.py}
touch backend/tests/services/__init__.py
touch backend/tests/agents/__init__.py

touch backend/requirements.txt
touch backend/.env.example
touch frontend/.env.example

# 6. Root configuration
touch .gitignore

echo "Cakes & Bake project setup completed."
echo "Frontend: cd frontend && npm run dev"
echo "Backend entry point: backend/app/main.py"
