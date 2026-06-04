'use client';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail } from 'lucide-react';
import { useState } from 'react';

const Github = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.enum(['Job Opportunity', 'Freelance Project', 'Other']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try emailing me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      <main className="flex-1 py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedSection>
              <SectionHeading 
                title="Let's build something." 
                subtitle="Open to senior remote roles and freelance frontend projects. Response within 24 hours."
              />
              
              <div className="mt-12 flex flex-col gap-6">
                <a href="mailto:nikshadali@example.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <p>nikshadali@example.com</p>
                  </div>
                </a>
                
                <a href="https://linkedin.com/in/nikshadali" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">LinkedIn</h3>
                    <p>linkedin.com/in/nikshadali</p>
                  </div>
                </a>

                <a href="https://github.com/nikshad" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground">
                    <Github size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">GitHub</h3>
                    <p>github.com/nikshad</p>
                  </div>
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="rounded-2xl border border-border bg-secondary/30 p-8">
              {isSuccess ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/20 text-success">
                    <Mail size={32} />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium" style={{ color: '#94A3B8' }}>Name</label>
                    <input
                      {...register('name')}
                      id="name"
                      placeholder="John Doe"
                      className="rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                      style={{ background: '#0F172A', border: '1px solid #2D3F55' }}
                      onFocus={e => { e.target.style.borderColor = '#3B82F6'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.12)'; }}
                      onBlur={e => { e.target.style.borderColor = '#2D3F55'; e.target.style.boxShadow = 'none'; }}
                    />
                    {errors.name && <span className="text-xs" style={{ color: '#F87171' }}>{errors.name.message}</span>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium" style={{ color: '#94A3B8' }}>Email</label>
                    <input
                      {...register('email')}
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                      style={{ background: '#0F172A', border: '1px solid #2D3F55' }}
                      onFocus={e => { e.target.style.borderColor = '#3B82F6'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.12)'; }}
                      onBlur={e => { e.target.style.borderColor = '#2D3F55'; e.target.style.boxShadow = 'none'; }}
                    />
                    {errors.email && <span className="text-xs" style={{ color: '#F87171' }}>{errors.email.message}</span>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm font-medium" style={{ color: '#94A3B8' }}>Subject</label>
                    <select
                      {...register('subject')}
                      id="subject"
                      className="rounded-xl px-4 py-3 text-sm text-white outline-none transition-all appearance-none"
                      style={{ background: '#0F172A', border: '1px solid #2D3F55', color: '#F1F5F9' }}
                      onFocus={e => { e.target.style.borderColor = '#3B82F6'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.12)'; }}
                      onBlur={e => { e.target.style.borderColor = '#2D3F55'; e.target.style.boxShadow = 'none'; }}
                    >
                      <option value="Job Opportunity">Job Opportunity</option>
                      <option value="Freelance Project">Freelance Project</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.subject && <span className="text-xs" style={{ color: '#F87171' }}>{errors.subject.message}</span>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium" style={{ color: '#94A3B8' }}>Message</label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="resize-none rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                      style={{ background: '#0F172A', border: '1px solid #2D3F55' }}
                      onFocus={e => { e.target.style.borderColor = '#3B82F6'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.12)'; }}
                      onBlur={e => { e.target.style.borderColor = '#2D3F55'; e.target.style.boxShadow = 'none'; }}
                    />
                    {errors.message && <span className="text-xs" style={{ color: '#F87171' }}>{errors.message.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex h-12 items-center justify-center rounded-xl px-8 text-sm font-semibold text-white transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                    style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)', boxShadow: '0 0 24px rgba(59,130,246,0.25)' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
