'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { optimizeHeadline, OptimizeHeadlineInput } from '@/ai/flows/optimize-headline';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { Badge } from '../ui/badge';

const formSchema = z.object({
  section: z.string().min(2, "Section is required."),
  currentHeadline: z.string().min(10, "Current headline must be at least 10 characters."),
  performanceMetrics: z.string().min(5, "Performance metrics are required."),
});

export function HeadlineOptimizer() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations[language];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      section: "",
      currentHeadline: "",
      performanceMetrics: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestions([]);
    try {
      const result = await optimizeHeadline(values as OptimizeHeadlineInput);
      setSuggestions(result.suggestions);
    } catch (error) {
      console.error("Error optimizing headline:", error);
      toast({
        title: "Error",
        description: "Failed to generate suggestions. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="optimizer" className="bg-secondary">
      <div className="container px-4 md:px-6">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary flex items-center justify-center gap-3">
              <Wand2 className="w-8 h-8" />
              {t.headlineOptimizerTitle}
            </CardTitle>
            <CardDescription className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.headlineOptimizerSubtitle}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="section"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.headlineSection}</FormLabel>
                      <FormControl>
                        <Input placeholder={t.headlineSectionPlaceholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="currentHeadline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.currentHeadline}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t.currentHeadlinePlaceholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="performanceMetrics"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.performanceMetrics}</FormLabel>
                      <FormControl>
                        <Input placeholder={t.performanceMetricsPlaceholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  {isLoading ? (
                    <>
                      <Loader2 className="me-2 h-4 w-4 animate-spin" />
                      {t.generating}
                    </>
                  ) : (
                    t.generateSuggestions
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
          {(isLoading || suggestions.length > 0) && (
             <CardFooter className="flex flex-col items-start gap-4">
                <h3 className="font-semibold text-lg">{t.suggestions}</h3>
                {isLoading && <p className="text-muted-foreground">{t.generating}</p>}
                <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion, index) => (
                        <Badge key={index} variant="secondary" className="text-base p-2 cursor-pointer" onClick={() => navigator.clipboard.writeText(suggestion)}>
                            {suggestion}
                        </Badge>
                    ))}
                </div>
            </CardFooter>
          )}
        </Card>
      </div>
    </section>
  );
}
