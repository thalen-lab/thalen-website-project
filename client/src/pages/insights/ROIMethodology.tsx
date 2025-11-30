import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RelatedArticles from '@/components/RelatedArticles';
import SocialShare from '@/components/SocialShare';
import CommentSection from '@/components/CommentSection';
import { ArrowRight, Download, User, Clock, Share2 } from 'lucide-react';
import { Link } from 'wouter';

export default function ROIMethodology() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 bg-navy-gradient text-primary-foreground">
        <div className="container max-w-4xl">
          <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Automation Strategy
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The ROI Methodology: Measuring Automation Success
          </h1>
          <p className="text-xl opacity-90 mb-8">
            A comprehensive framework for calculating and tracking return on investment in intelligent automation initiatives.
          </p>
          <div className="flex items-center text-sm opacity-80 space-x-6">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              Sarah Chen
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              8 min read
            </div>
            <div className="text-sm">Nov 10, 2024</div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          {/* Social Share */}
          <div className="mb-8 pb-8 border-b">
            <SocialShare 
              title="The ROI Methodology: Measuring Automation Success"
              url="/insights/roi-methodology"
              description="A comprehensive framework for calculating and tracking return on investment in intelligent automation initiatives."
            />
          </div>
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-4">Introduction</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Measuring the return on investment (ROI) of automation initiatives is critical for justifying technology investments and demonstrating business value. However, many organizations struggle to accurately quantify both the costs and benefits of automation projects, leading to underinvestment or misallocated resources.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              At Thalen Technologies, we've developed a comprehensive ROI methodology based on 15+ years of automation implementations across federal agencies and enterprise organizations. This framework provides a structured approach to measuring automation success across multiple dimensions.
            </p>

            <Card className="my-8 bg-accent/10 border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Key Takeaway</h3>
                <p className="text-lg">
                  Effective ROI measurement requires tracking both quantitative metrics (cost savings, time reduction) and qualitative benefits (employee satisfaction, risk reduction) across the entire automation lifecycle.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mb-4 mt-12">The Four Pillars of Automation ROI</h2>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">1. Direct Cost Savings</h3>
            <p className="text-lg text-muted-foreground mb-4">
              The most straightforward ROI component measures direct labor cost reductions through process automation. Calculate this by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground mb-6">
              <li>Identifying current fully-loaded labor costs (salary + benefits + overhead)</li>
              <li>Measuring time spent on automatable tasks</li>
              <li>Calculating hours saved through automation</li>
              <li>Multiplying saved hours by fully-loaded hourly rate</li>
            </ul>
            <Card className="my-6 bg-secondary">
              <CardContent className="p-6">
                <p className="font-mono text-sm">
                  <strong>Example Calculation:</strong><br />
                  Process: Invoice Processing<br />
                  Current Time: 15 min/invoice × 10,000 invoices = 2,500 hours<br />
                  Automated Time: 2 min/invoice × 10,000 invoices = 333 hours<br />
                  Time Saved: 2,167 hours<br />
                  Fully-Loaded Rate: $75/hour<br />
                  <strong>Annual Savings: $162,525</strong>
                </p>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mb-4 mt-8">2. Quality Improvements</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Automation reduces error rates, improving quality and reducing rework costs. Measure this through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground mb-6">
              <li>Baseline error rate measurement (errors per 1,000 transactions)</li>
              <li>Post-automation error rate tracking</li>
              <li>Cost per error calculation (rework + customer impact)</li>
              <li>Total quality improvement value</li>
            </ul>
            <p className="text-lg text-muted-foreground mb-6">
              In our federal agency case study, reducing error rates from 12% to 0.8% saved $2.1M annually in rework costs alone.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">3. Speed & Scalability</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Faster processing enables business growth without proportional headcount increases. Calculate value through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground mb-6">
              <li>Cycle time reduction (days to hours, hours to minutes)</li>
              <li>Throughput capacity increase</li>
              <li>Revenue opportunity from faster processing</li>
              <li>Avoided hiring costs for volume growth</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 mt-8">4. Strategic Benefits</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Harder to quantify but equally important strategic benefits include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground mb-6">
              <li><strong>Employee Satisfaction:</strong> Eliminating tedious manual work improves retention (avg. replacement cost: 150% of salary)</li>
              <li><strong>Compliance & Risk Reduction:</strong> Automated audit trails and controls reduce compliance violations</li>
              <li><strong>Data-Driven Insights:</strong> Automation generates data for continuous improvement</li>
              <li><strong>Competitive Advantage:</strong> Faster, more accurate operations differentiate your organization</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">Implementation Timeline & ROI Curve</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Understanding the ROI timeline is critical for setting realistic expectations. Our typical automation projects follow this pattern:
            </p>
            <Card className="my-6 bg-secondary">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <strong className="text-lg">Months 1-3: Investment Phase</strong>
                    <p className="text-muted-foreground">Design, development, and initial deployment. Negative cash flow as implementation costs are incurred.</p>
                  </div>
                  <div>
                    <strong className="text-lg">Months 4-6: Ramp-Up Phase</strong>
                    <p className="text-muted-foreground">User training, process refinement, and optimization. Benefits begin accruing but don't yet offset costs.</p>
                  </div>
                  <div>
                    <strong className="text-lg">Months 7-12: Breakeven Phase</strong>
                    <p className="text-muted-foreground">Full operational efficiency achieved. Cumulative benefits equal initial investment.</p>
                  </div>
                  <div>
                    <strong className="text-lg">Months 13+: Value Realization</strong>
                    <p className="text-muted-foreground">Sustained positive ROI with continuous improvement opportunities.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mb-4 mt-12">Common ROI Measurement Pitfalls</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Avoid these common mistakes when calculating automation ROI:
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: 'Ignoring Total Cost of Ownership',
                  description: 'Include ongoing maintenance, licensing, and support costs in your calculations, not just initial implementation.'
                },
                {
                  title: 'Overstating Labor Savings',
                  description: 'Saved time must be redeployed to higher-value work to realize actual savings. Track redeployment carefully.'
                },
                {
                  title: 'Underestimating Change Management',
                  description: 'User adoption directly impacts ROI. Budget 20-30% of project costs for training and change management.'
                },
                {
                  title: 'Failing to Track Actual Results',
                  description: 'Implement measurement systems before automation to establish baselines and track improvements.'
                }
              ].map((pitfall, index) => (
                <Card key={index} className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-2">{pitfall.title}</h4>
                    <p className="text-muted-foreground">{pitfall.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-4 mt-12">Conclusion</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Measuring automation ROI requires a comprehensive framework that captures both quantitative and qualitative benefits across the entire project lifecycle. By following this methodology, organizations can make data-driven investment decisions, set realistic expectations, and demonstrate the business value of automation initiatives.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              At Thalen Technologies, we work with clients to establish ROI measurement frameworks before project kickoff, ensuring clear success criteria and ongoing value tracking. Our typical clients achieve 12-18 month payback periods with sustained 3-5x ROI over three years.
            </p>
          </article>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl mr-4">
                  SC
                </div>
                <div>
                  <div className="font-bold text-lg">Sarah Chen</div>
                  <div className="text-muted-foreground">Director of Automation Strategy</div>
                </div>
              </div>
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Share Article
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Change Management: The Key to Transformation Success',
                category: 'Digital Transformation',
                readTime: '11 min read'
              },
              {
                title: 'Zero-Trust Architecture for Federal Agencies',
                category: 'Cybersecurity',
                readTime: '10 min read'
              },
              {
                title: 'Real-Time Analytics at Government Scale',
                category: 'Data Analytics',
                readTime: '10 min read'
              }
            ].map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-sm text-accent font-semibold mb-2">{article.category}</div>
                  <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {article.readTime}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient text-primary-foreground">
        <div className="container text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Calculate Your Automation ROI?</h2>
          <p className="text-xl opacity-90 mb-8">
            Schedule a strategic assessment with our automation experts to identify opportunities and project ROI.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-orange-gradient hover:opacity-90">
              Schedule Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <CommentSection articleSlug="roi-methodology" />
        </div>
      </section>

      <RelatedArticles currentArticleHref="/insights/roi-methodology" />

      <Footer />
    </div>
  );
}
