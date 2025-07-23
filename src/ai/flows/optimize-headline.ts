// OptimizeHeadline flow generates alternative headline suggestions for website sections to improve engagement.
'use server';

/**
 * @fileOverview A headline optimization AI agent.
 *
 * - optimizeHeadline - A function that suggests alternative headlines.
 * - OptimizeHeadlineInput - The input type for the optimizeHeadline function.
 * - OptimizeHeadlineOutput - The return type for the optimizeHeadline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeHeadlineInputSchema = z.object({
  section: z.string().describe('The section of the website the headline is for (e.g., Home, Services, About Us).'),
  currentHeadline: z.string().describe('The current headline text.'),
  performanceMetrics: z.string().describe('Key performance indicators (KPIs) and metrics for the current headline.'),
});
export type OptimizeHeadlineInput = z.infer<typeof OptimizeHeadlineInputSchema>;

const OptimizeHeadlineOutputSchema = z.object({
  suggestions: z.array(
    z.string().describe('An alternative headline suggestion.')
  ).describe('A list of alternative headline suggestions.'),
});
export type OptimizeHeadlineOutput = z.infer<typeof OptimizeHeadlineOutputSchema>;

export async function optimizeHeadline(input: OptimizeHeadlineInput): Promise<OptimizeHeadlineOutput> {
  return optimizeHeadlineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeHeadlinePrompt',
  input: {schema: OptimizeHeadlineInputSchema},
  output: {schema: OptimizeHeadlineOutputSchema},
  prompt: `You are an expert copywriter specializing in creating high-converting headlines.

  You will be provided with the current headline for a specific section of a website, along with its recent performance metrics.
  Your goal is to suggest three alternative headlines that are more compelling and likely to improve click-through rates and engagement.

  Website Section: {{{section}}}
Current Headline: {{{currentHeadline}}}
Performance Metrics: {{{performanceMetrics}}}

  Provide three alternative headline suggestions:

  Suggestions:
  `,
});

const optimizeHeadlineFlow = ai.defineFlow(
  {
    name: 'optimizeHeadlineFlow',
    inputSchema: OptimizeHeadlineInputSchema,
    outputSchema: OptimizeHeadlineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
