import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState<FormData | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted({ ...formData });
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,128,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="bg-gray-900 border border-green-500/30 rounded-2xl shadow-[0_0_40px_rgba(0,255,128,0.1)] p-8">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs font-mono tracking-widest uppercase">Registration</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="group">
              <label className="block text-xs font-mono text-green-400/70 uppercase tracking-widest mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-gray-800 border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500/50 rounded-lg px-4 py-3 text-white placeholder-gray-600 font-mono text-sm outline-none transition-all duration-200"
              />
            </div>

            {/* Email */}
            <div className="group">
              <label className="block text-xs font-mono text-green-400/70 uppercase tracking-widest mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-gray-800 border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500/50 rounded-lg px-4 py-3 text-white placeholder-gray-600 font-mono text-sm outline-none transition-all duration-200"
              />
            </div>

            {/* Phone */}
            <div className="group">
              <label className="block text-xs font-mono text-green-400/70 uppercase tracking-widest mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full bg-gray-800 border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500/50 rounded-lg px-4 py-3 text-white placeholder-gray-600 font-mono text-sm outline-none transition-all duration-200"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-2 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-gray-950 font-extrabold font-mono tracking-widest uppercase rounded-lg py-3 text-sm transition-all duration-200 shadow-[0_0_20px_rgba(0,255,128,0.3)] hover:shadow-[0_0_30px_rgba(0,255,128,0.5)] active:scale-95"
            >
              Enter
            </button>
          </form>

          {/* Output Panel */}
          {submitted && (
            <div className="mt-6 bg-gray-800/60 border border-green-500/20 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-mono tracking-widest uppercase">Profile Loaded</span>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">NAME</span>
                  <span className="text-white font-semibold">{submitted.name || "—"}</span>
                </div>
                <div className="h-px bg-gray-700/50" />
                <div className="flex justify-between">
                  <span className="text-gray-500">EMAIL</span>
                  <span className="text-white font-semibold">{submitted.email || "—"}</span>
                </div>
                <div className="h-px bg-gray-700/50" />
                <div className="flex justify-between">
                  <span className="text-gray-500">PHONE</span>
                  <span className="text-white font-semibold">{submitted.phone || "—"}</span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
