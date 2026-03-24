import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch {
      setError('Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl text-white font-bold tracking-wide mb-1">
            SiyadaTech
          </h1>
          <p className="text-slate-dashboard text-sm font-body tracking-widest uppercase">
            Three Engines. One Path to IPO.
          </p>
        </div>

        {/* Card */}
        <div className="bg-navy-800 border border-navy-600 rounded-2xl px-8 py-10 shadow-2xl">
          <h2 className="font-display text-xl text-white font-semibold mb-6 text-center">
            Sign In
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-body font-medium text-slate-dashboard uppercase tracking-widest mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full bg-navy-700 border border-navy-600 text-white placeholder-navy-600 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition"
                placeholder="you@siyadatech.com"
              />
            </div>

            <div>
              <label className="block text-xs font-body font-medium text-slate-dashboard uppercase tracking-widest mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full bg-navy-700 border border-navy-600 text-white placeholder-navy-600 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm font-body bg-red-900/20 border border-red-800/40 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gold-500 hover:bg-gold-600 disabled:opacity-60 disabled:cursor-not-allowed text-navy-900 font-body font-semibold rounded-lg px-4 py-3 text-sm transition-colors"
            >
              {isLoading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        </div>

        {/* Footer label */}
        <p className="text-center text-xs text-slate-dashboard/60 font-body mt-6 tracking-widest uppercase">
          Confidential — Board Access
        </p>
      </div>
    </div>
  );
}
