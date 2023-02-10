import NewChat from "./NewChat"

function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div>
                {/**New Chat */}
                <NewChat />

                <div>
                    {/**Model selection */}
                </div>

                {/**Map through Chats */}
            </div>
        </div>
    </div>
  )
}

export default SideBar