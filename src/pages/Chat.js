import React, { useState } from "react";
import { Send, Phone, Video, MoreVertical, Search, Image } from "lucide-react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export default function ChatPage() {
  const [message, setMessage] = useState("");

  const conversations = [
    { id: 1, name: "Fashion Store", lastMessage: "Thank you for your inquiry!", time: "2m ago", unread: 2 },
    { id: 2, name: "Boutique", lastMessage: "Your order has been shipped", time: "1h ago", unread: 0 },
    { id: 3, name: "Shop", lastMessage: "We have it in size M", time: "3h ago", unread: 0 },
  ];

  const messages = [
    { id: 1, sender: "seller", text: "Hello! How can I help you today?", time: "10:00 AM" },
    { id: 2, sender: "customer", text: "Hi! I'm interested in the evening gown from your new products", time: "10:02 AM" },
    { id: 3, sender: "seller", text: "Great choice! Which color would you prefer?", time: "10:03 AM" },
    { id: 4, sender: "customer", text: "Do you have it in royal blue?", time: "10:05 AM" },
  ];

  return (
    <div className="bg-sky-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-12 h-[800px]">
            {/* Conversation List */}
            <div className="col-span-3 border-r">
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full pl-10 pr-4 py-2 border rounded-full bg-gray-50"
                  />
                </div>
              </div>
              <div className="overflow-y-auto h-[calc(100%-73px)]">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    className="p-4 border-b hover:bg-sky-50 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-lg">{conv.name[0]}</span>
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium text-gray-900">{conv.name}</h3>
                          <span className="text-sm text-gray-500">{conv.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{conv.lastMessage}</p>
                      </div>
                      {conv.unread > 0 && <span className="ml-2 bg-sky-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{conv.unread}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="col-span-9 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-lg">E</span>
                  </div>
                  <div className="ml-3">
                    <h2 className="font-medium">Elegant Fashion Store</h2>
                    <span className="text-sm text-green-500">Online</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Phone className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Video className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <MoreVertical className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "customer" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[70%] rounded-lg p-3 ${msg.sender === "customer" ? "bg-sky-600 text-white" : "bg-gray-100 text-gray-900"}`}>
                      <p>{msg.text}</p>
                      <span className={`text-xs ${msg.sender === "customer" ? "text-sky-100" : "text-gray-500"} mt-1 block`}>{msg.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex items-center space-x-4">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Image className="h-5 w-5 text-gray-600" />
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border rounded-full focus:outline-none focus:border-sky-300"
                  />
                  <button className="p-3 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-colors">
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
