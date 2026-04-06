import { List, HomeIcon, Settings, ZapIcon, XCircle, LogOut } from "lucide-react"
import { Link } from "react-router-dom"

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const sidebarItems = [
    { id: 1, icon: HomeIcon, title: "Dashboard", path: "/" },
    { id: 2, icon: List, title: "Transactions", path: "/transactions" },
    { id: 3, icon: ZapIcon, title: "Insights", path: "/" },
    { id: 4, icon: Settings, title: "Settings", path: "/" }
  ]

  return (
    <>
      {/* Overlay (mobile only) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden bg-white dark:bg-gray-900 text-black dark:text-white"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-md transform transition-transform duration-300 dark:bg-gray-900 text-gray-800 dark:text-white 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:block`}
      >

        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b">
          <div className="text-lg font-bold">Logo</div>

          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <XCircle />
          </button>
        </div>

        {/* Menu */}
        <div className="p-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon

            return (
              <Link to={item.path} key={item.id}>
                <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 transition">
                  <Icon size={18} />
                  <span className="text-sm">{item.title}</span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Bottom User Section */}
        <div className="absolute bottom-0 w-full p-4">
          <div className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span className="text-sm font-medium">Akalya</span>
            </div>

            <button>
              <LogOut size={18} />
            </button>
          </div>
        </div>

      </aside>
    </>
  )
}

export default Sidebar