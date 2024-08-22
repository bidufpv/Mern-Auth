import React from "react";

export default function AuthForm({
  formData,
  handleChange,
  handleSubmit,
  loading,
  buttonText,
}) {
  return (
  
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Username"
        id="username"
        className="bg-slate-100 p-3 rounded-lg"
        onChange={handleChange}
        value={formData.username || ""}
      />
      <input
        type="email"
        placeholder="Email"
        id="email"
        className="bg-slate-100 p-3 rounded-lg"
        onChange={handleChange}
        value={formData.email || ""}
      />
      <input
        type="password"
        placeholder="Password"
        id="password"
        className="bg-slate-100 p-3 rounded-lg"
        onChange={handleChange}
        value={formData.password || ""}
      />
      <button
        disabled={loading}
        className="bg-slate-900 text-blue-300 
        p-3 rounded-lg uppercase hover:opacity-90 
        disabled:opacity-80"
      >
        {loading ? "Loading..." : buttonText}
      </button>
</form>

  );
}
