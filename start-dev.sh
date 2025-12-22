#!/bin/bash

echo "🚀 Starting RS Solar CAD Group Application..."
echo ""

# Check if backend/.env exists
if [ ! -f backend/.env ]; then
    echo "⚠️  Warning: backend/.env file not found!"
    echo "📝 Please configure your SMTP settings in backend/.env"
    echo "💡 See CUSTOM_SMTP_SETUP.md for instructions"
    echo ""
    read -p "Press Enter to continue anyway or Ctrl+C to exit..."
fi

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Shutting down servers..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit 0
}

trap cleanup INT TERM

# Start backend server
echo "📧 Starting Backend Server (Port 5000)..."
cd backend
npm run dev &
BACKEND_PID=$!
cd ..

# Wait a bit for backend to start
sleep 3

# Start frontend server
echo "🌐 Starting Frontend Server (Port 5173)..."
npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ Both servers are running!"
echo ""
echo "📧 Backend:  http://localhost:5000"
echo "🌐 Frontend: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Wait for both processes
wait
