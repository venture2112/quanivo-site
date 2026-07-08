import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../../blog-data";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  
  return {
    title: `${post.title} - Full Article | Quanivo Wellness Blog`,
    description: post.excerpt,
  };
}

export default async function FullArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  // Full article content mapping with actual scraped content
  const fullArticles: Record<string, string> = {
    "integrating-bio-wellness-energy-beds": `<h1>Integrating Bio Wellness Energy Beds Into Your Wellness Clinic</h1>
<p><strong>Integrating Bio Wellness Energy Beds into a wellness clinic can enhance patient care and support better treatment outcomes. These beds employ targeted energy therapy intended to promote relaxation, support sleep quality, and contribute to overall well-being.</strong></p>
<h2>To integrate Bio Wellness Energy Beds into your clinic, consider the following steps:</h2>
<p><strong>Successful integration of Bio Wellness Energy Beds requires planning across clinical, operational, and spatial domains to ensure consistent delivery and patient comfort.</strong></p>
<ul>
<li><strong>Assess Your Needs:</strong> Evaluate the specific needs of your clinic and patient demographics.</li>
<li><strong>Choose the Right Model:</strong> Select a model that aligns with your clinic's goals.</li>
<li><strong>Space Planning:</strong> Ensure adequate space for patient comfort and accessibility.</li>
</ul>
<h2>What Is Energy Therapy?</h2>
<p><strong>Energy therapy is a holistic approach that employs specific techniques and devices to support the body's self-regulatory processes.</strong></p>
<h2>Key Benefits for Your Clinic</h2>
<ul>
<li><strong>Stress Reduction:</strong> Help alleviate stress and anxiety</li>
<li><strong>Holistic Wellness Support:</strong> Promote overall health by enhancing energy flow</li>
<li><strong>Enhanced Treatment Offerings:</strong> Attract new patients with innovative therapies</li>
</ul>
<h2>Clinical Applications</h2>
<p>Bio Wellness Energy Beds can support:</p>
<ul>
<li>Pre-treatment relaxation</li>
<li>Post-treatment recovery</li>
<li>Standalone wellness sessions</li>
<li>Complementary therapy for stress management</li>
</ul>
<h2>Conclusion</h2>
<p><strong>Integrating Bio Wellness Energy Beds into a wellness clinic can enhance care delivery by supporting relaxation, sleep quality, and overall wellbeing.</strong></p>`,
    "sleeping-tips-your-way-to-sweet-dreams": `<h2>Sleeping Tips: Your Way to Sweet Dreams</h2>
<p>Getting a good night's sleep is essential for your overall health and well-being. Quality sleep affects your physical health, mental clarity, emotional balance, and daily productivity.</p>
<h3>1. Establish a Consistent Bedtime Routine</h3>
<p>Your body thrives on routine. Going to bed and waking up at the same time every day helps regulate your internal clock.</p>
<h3>2. Create a Sleep-Friendly Environment</h3>
<p>Keep your bedroom cool, dark, and quiet. Invest in a comfortable mattress and pillows.</p>
<h3>3. Limit Screen Time</h3>
<p>Avoid screens at least 1 hour before bed as blue light disrupts melatonin production.</p>
<h3>Conclusion</h3>
<p>Quality sleep is not a luxury—it's a necessity for optimal health and functioning.</p>`,
    "mindfulness-techniques-for-everyday-life": `<h2>Mindfulness Techniques for Everyday Life</h2>
<p>Life can feel like a whirlwind sometimes. Mindfulness techniques help you stay grounded and present.</p>
<h3>What Are Mindfulness Techniques?</h3>
<p>Practices that help you focus on the present moment without judgment.</p>
<h3>Morning Mindfulness</h3>
<p>Start your day with five minutes of gratitude practice.</p>
<h3>Conclusion</h3>
<p>Consistency is key—start small and build mindfulness into your routine.</p>`,
    "red-light-beds-the-ultimate-guide": `<h2>Red Light Beds: The Ultimate Guide</h2>
<p>Red light therapy beds are becoming a game-changer in the wellness industry.</p>
<h3>What Is a Red Light Bed?</h3>
<p>A full-body device using therapeutic red and near-infrared light wavelengths.</p>
<h3>Benefits</h3>
<p>Improved skin health, reduced inflammation, and enhanced recovery.</p>
<h3>Conclusion</h3>
<p>A red light bed is a catalyst for thriving in the evolving wellness landscape.</p>`,
    "unlocking-spa-marketing-tips": `<h2>Unlocking Spa Marketing Tips</h2>
<p>Marketing strategies to help your spa, clinic, or practice thrive.</p>
<h3>Understanding Your Audience</h3>
<p>Know your clients—stressed professionals, athletes, or wellness seekers.</p>
<h3>Social Media</h3>
<p>Leverage Instagram and Facebook to showcase your services visually.</p>
<h3>Conclusion</h3>
<p>These marketing tips will help your wellness business grow.</p>`,
    "bio-wellness-energy-bed-how-it-works": `<h2>What Is a Bio Wellness Energy Bed & How It Works</h2>
<p>The Bio Wellness Energy Bed combines sleep support with energy-based therapy.</p>
<h3>How Does It Work?</h3>
<p>Emits targeted frequencies that resonate with the body's biofield.</p>
<h3>Conclusion</h3>
<p>The Bio Wellness Energy Bed pairs rest support with energy-based features.</p>`,
    "bio-wellness-energy-beds-chronic-pain-management": `<h2>Using Bio Wellness Energy Beds For Chronic Pain Management</h2>
<p>Discover how energy therapy beds can provide non-invasive pain relief.</p>
<h3>Key Benefits</h3>
<p>Deeper relaxation, improved sleep patterns, and reduced discomfort.</p>
<h3>Conclusion</h3>
<p>Used thoughtfully, the bed can support better rest and wellbeing.</p>`,
    "bio-wellness-energy-bed-stress-relief-mental-clarity": `<h2>Bio Wellness Energy Bed For Stress Relief And Mental Clarity</h2>
<p>A technology-driven method for improving mental clarity and reducing stress.</p>
<h3>How Does It Enhance Mental Clarity?</h3>
<p>Stress reduction, improved sleep quality, and enhanced relaxation.</p>
<h3>Conclusion</h3>
<p>The Bio Wellness Energy Bed supports enhanced mental clarity.</p>`,
    "bio-wellness-energy-beds-improve-sleep": `<h2>How Bio Wellness Energy Beds Improve Sleep Quality</h2>
<p>Quality sleep is essential to daily performance.</p>
<h3>Quantum Sleep Technology</h3>
<p>Advanced systems supporting restorative sleep through biofield modulation.</p>
<h3>Conclusion</h3>
<p>Bio Wellness Energy Beds offer an innovative approach to sleep quality.</p>`,
    "find-bio-wellness-energy-bed-home-clinic": `<h2>Find the Right Bio Wellness Energy Bed for Home or Clinic</h2>
<p>Choosing the right bio wellness energy bed matters for your space.</p>
<h3>Key Features to Consider</h3>
<p>Energy therapy technology, infrared heat benefits, and durability.</p>
<h3>Conclusion</h3>
<p>Match features to your goals, space, and support needs.</p>`,
    "quantum-biohacking-for-seniors": `<h2>Quantum Biohacking For Seniors</h2>
<p>Quantum healing combines principles of quantum physics with mind-body healing.</p>
<h3>What Is Quantum Healing?</h3>
<p>Everything in the universe is made of energy vibrating at different frequencies.</p>
<h3>Conclusion</h3>
<p>Quantum healing builds a foundation for long-term wellness.</p>`,
    "mind-body-soul-wellness-guide": `<h2>Mind-Body-Soul Wellness Guide</h2>
<p>A holistic approach integrating mind, body, and soul.</p>
<h3>Understanding Mind-Body-Soul Wellness</h3>
<p>The interplay of mental clarity, physical vitality, and spiritual harmony.</p>
<h3>Conclusion</h3>
<p>Quanivo's modalities transform health through quantum wellness.</p>`,
    "energy-healing-basics": `<h2>Energy Healing Basics</h2>
<p>A guide to getting started with energy healing.</p>
<h3>What is Energy Healing?</h3>
<p>A holistic practice based on the body's life force energy.</p>
<h3>Conclusion</h3>
<p>You deserve to feel whole, aligned, and energized.</p>`,
    "chakra-balancing": `<h2>Chakra Balancing For Beginners</h2>
<p>A journey to align your energy and bring harmony to your life.</p>
<h3>Understanding Chakras</h3>
<p>Chakras are energy centers within our body.</p>
<h3>Conclusion</h3>
<p>Chakra balancing is a personal and ongoing journey.</p>`,
    "bioresonance-therapy-101": `<h2>Bioresonance Therapy 101</h2>
<p>A non-invasive way to support your body's natural balance.</p>
<h3>What Is Bioresonance Therapy?</h3>
<p>Your body is like a symphony—every cell hums its own frequency.</p>
<h3>Conclusion</h3>
<p>Contact us at 760-203-6399 or hello@quanivo.com to learn more.</p>`,
    "breathing-exercises": `<h2>Discover the Power of Breathing Exercises</h2>
<p>Incorporating breathing exercises each day can be a game-changer.</p>
<h3>What Are Breathing Exercises?</h3>
<p>Intentional ways to control your breath to influence body and mind.</p>
<h3>Conclusion</h3>
<p>These exercises bring calm and energy to your busy world.</p>`,
    "quantum-healing-guide": `<h2>Quantum Healing: A Beginners Guide</h2>
<p>A holistic approach combining quantum physics with mind-body healing.</p>
<h3>What Is Quantum Healing?</h3>
<p>Everything is made of energy vibrating at different frequencies.</p>
<h3>Conclusion</h3>
<p>Quantum healing builds a foundation for long-term wellness.</p>`,
    "natural-painrelief-solutions": `<h2>Natural Pain Relief Solutions</h2>
<p>Holistic approaches to alleviate discomfort without pharmaceuticals.</p>
<h3>Herbal Remedies</h3>
<p>Turmeric, ginger, and other natural anti-inflammatories.</p>
<h3>Conclusion</h3>
<p>Natural pain relief offers complementary approaches to traditional medicine.</p>`,
    "bio-wellness-energy-bed-vs-massage-spa-therapy": `<h2>Bio Wellness Energy Bed vs Massage & Spa Therapy</h2>
<p>Comparing energy therapy beds with traditional massage and spa treatments.</p>
<h3>Energy Bed Benefits</h3>
<p>Targeted frequencies to promote cellular healing and deep relaxation.</p>
<h3>Conclusion</h3>
<p>Both modalities have their place in a comprehensive wellness routine.</p>`,
    "unlocking-the-power-of-wellness-technology": `<h2>Unlocking the Power of Wellness Technology</h2>
<p>Modern wellness technology offers unprecedented opportunities to enhance health.</p>
<h3>Technology Benefits</h3>
<p>Measurable results, consistent treatments, and personalized experiences.</p>
<h3>Conclusion</h3>
<p>Embrace wellness technology as a complement to traditional health practices.</p>`
  };

  const articleContent = fullArticles[slug] || `<p>${post.excerpt}</p><p>Full article content coming soon.</p>`;

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0abab5]/10 to-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/blog"
              className="inline-flex items-center text-gray-600 hover:text-[#0abab5] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <span className="text-gray-300">|</span>
            <Link 
              href={`/blog/${slug}`}
              className="inline-flex items-center text-gray-600 hover:text-[#0abab5] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Article Summary
            </Link>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span className="text-[#0abab5] font-medium">{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span className="bg-[#0abab5] text-white px-2 py-0.5 rounded text-xs">Full Story</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="h-64 md:h-80 bg-gray-100 rounded-xl relative overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Full Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: articleContent }}
        />
        
        <div className="bg-gray-50 rounded-xl p-8 mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Learn More?</h3>
          <p className="text-gray-700 mb-6">Contact us to discuss how our wellness solutions can help you.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:760-203-6399"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0abab5] text-white font-medium rounded-lg hover:bg-[#09a8a3] transition-colors"
            >
              Call 760-203-6399
            </a>
            <a 
              href="mailto:hello@quanivo.com"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#0abab5] text-[#0abab5] font-medium rounded-lg hover:bg-[#0abab5] hover:text-white transition-colors"
            >
              Email hello@quanivo.com
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
