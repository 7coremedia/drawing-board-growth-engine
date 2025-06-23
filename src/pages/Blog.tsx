import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Growth', 'Strategy', 'Content', 'Offer Building', 'Funnels'];
  
  const blogPosts = [
    {
      title: 'The 7Flow Engine: How to Guarantee 7 New Customers Every Month',
      excerpt: 'Discover the exact system we use to get our clients 7 new customers monthly or they don\'t pay. This isn\'t theory—it\'s proven strategy.',
      category: 'Strategy',
      readTime: '8 min read',
      featured: true,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop'
    },
    {
      title: 'Why Your Amazing Product Isn\'t Selling (And How to Fix It)',
      excerpt: 'Having a great product isn\'t enough. Learn the 3 psychological triggers that turn browsers into buyers.',
      category: 'Growth',
      readTime: '6 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop'
    },
    {
      title: 'The Godfather Offer: Creating Irresistible Deals That Close Themselves',
      excerpt: 'Stop chasing customers. Create offers so good they chase you instead. Here\'s our proven framework.',
      category: 'Offer Building',
      readTime: '10 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop'
    },
    {
      title: 'From Dead Brand to Thriving Business: A Complete Transformation Guide',
      excerpt: 'The step-by-step process we use to resurrect struggling brands and turn them into customer magnets.',
      category: 'Strategy',
      readTime: '12 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop'
    },
    {
      title: 'The Client Magnet Blueprint: 5 Ways to Attract Customers 24/7',
      excerpt: 'Stop waiting for customers to find you. Learn how to create systems that attract ideal clients while you sleep.',
      category: 'Growth',
      readTime: '7 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop'
    },
    {
      title: 'Sales Funnel Psychology: How to Guide Customers to Yes',
      excerpt: 'The mental journey your customers take from stranger to buyer—and how to optimize every step.',
      category: 'Funnels',
      readTime: '9 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=400&fit=crop'
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-satoshi font-bold mb-4">
              The Business Blueprint by TDB
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
              Blueprints for brands who want results. Real strategies, proven systems, 
              measurable growth.
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email"
                placeholder="Get weekly growth strategies"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 flex-1"
              />
              <Button 
                className="bg-accent text-primary hover:bg-accent/90 font-satoshi font-semibold px-6"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-300 mt-2 text-center">
              Join 2,500+ business owners
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-primary text-white font-satoshi font-semibold" : "font-satoshi"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <Badge className="bg-accent text-primary mb-4">Featured</Badge>
              <h2 className="text-2xl font-satoshi font-bold text-gray-900">Latest Blueprint</h2>
            </div>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
                  <h3 className="text-2xl lg:text-3xl font-satoshi font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                    <Button className="bg-primary hover:bg-primary/90 font-satoshi font-semibold">
                      Read Blueprint
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === 'All' ? regularPosts : filteredPosts).map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-satoshi group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  {/* Soft pitch */}
                  <div className="bg-accent/20 p-3 rounded-lg mb-4">
                    <p className="text-sm text-primary font-satoshi font-medium">
                      Want 7 new clients this month? We do it for you.
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm" className="font-satoshi">
                      Read More
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 font-satoshi font-semibold" asChild>
                      <a href="#pricing">Start With This Plan</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
