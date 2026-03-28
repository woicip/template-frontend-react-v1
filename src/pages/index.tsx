import { ThemeProvider } from "@/context/theme-context"
import { CatIcon, PuzzleIcon, ShieldUserIcon } from "lucide-react"
import { useNavigate } from "react-router"

function App() {
  const navigate = useNavigate();

  return (
    <ThemeProvider>
      <main className='w-full h-screen flex flex-col items-center justify-center'>
        <div className="w-[600px] p-[18px] h-screen flex flex-col justify-between gap-6">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center justify-center gap-2">
              <h1 className="font-semibold">Template Dashboard</h1>
            </div>
            <span className="py-[4px] px-[10px] text-small rounded-full bg-primary font-mono">v1.0.0</span>
          </div>

          <div className="w-full flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <button 
                type="button" 
                className="p-[20px] rounded-2xl border border-primary flex flex-col items-start justify-center gap-4 bg-primary/30 hover:bg-primary/50 transition-all cursor-pointer"
                onClick={() => navigate("/dashboard/components")}
              >
                <div className="p-[10px] rounded-[8px] bg-primary/80">
                  <PuzzleIcon width={18} height={18} />
                </div>
                <span>Components</span>
              </button>
              <button 
                type="button" 
                className="p-[20px] rounded-2xl border border-primary flex flex-col items-start justify-center gap-4 bg-primary/30 hover:bg-primary/50 transition-all cursor-pointer"
                onClick={() => navigate("/dashboard/admin")}
              >
                <div className="p-[10px] rounded-[8px] bg-primary/80">
                  <ShieldUserIcon width={18} height={18} />
                </div>
                <span>Admin</span>
              </button>
            </div>
          </div>

          <footer className="flex items-center justify-between">
            <div className="text-small">
              Made with ❤️ by <a href="https://woicip.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">woicip</a>
            </div>
            <div>
              <a href="https://github.com/woicip/template-frontend-react-v1" className="text-small hover:underline flex items-center gap-2">
                <CatIcon width={18} height={18} />
                GitHub
              </a>
            </div>
          </footer>
        </div>
      </main>
    </ThemeProvider>
  )
}

export default App