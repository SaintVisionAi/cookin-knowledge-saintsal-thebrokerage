import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Building2, Home, TrendingUp, Shield, Zap, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-black text-white">
      {/* Hero */}
      <section className="relative px-6 pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 via-transparent to-yellow-600/20" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-yellow-400 font-medium">Saint Vision AI</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
            The Brokerage
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-8">
            Commercial Lending • Real Estate • Private Investments
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/lending">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 font-semibold px-8 py-6 text-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/hub">
              <Button size="lg" variant="outline" className="border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 px-8 py-6 text-lg">
                Client Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-neutral-900/50 border-neutral-800 hover:border-yellow-400/50 transition-all group">
              <CardHeader>
                <Building2 className="w-12 h-12 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-2xl">Lending</CardTitle>
                <CardDescription>$100K - $50M financing</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/lending">
                  <Button className="w-full bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20">
                    Explore <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900/50 border-neutral-800 hover:border-yellow-400/50 transition-all group">
              <CardHeader>
                <Home className="w-12 h-12 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-2xl">Real Estate</CardTitle>
                <CardDescription>Investment • Brokerage • Management</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/real-estate">
                  <Button className="w-full bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20">
                    Explore <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900/50 border-neutral-800 hover:border-yellow-400/50 transition-all group">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-2xl">Investments</CardTitle>
                <CardDescription>9-12% fixed returns</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/investments">
                  <Button className="w-full bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20">
                    Explore <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
