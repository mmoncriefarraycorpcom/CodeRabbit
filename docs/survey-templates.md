# Appendix B: Developer Survey Templates

## Overview

This document contains survey templates for collecting developer feedback throughout the CodeRabbit AI pilot program. Surveys are designed to capture both quantitative and qualitative feedback at different phases.

## Pre-Pilot Baseline Survey

### Survey Information
- **Timing**: 1 week before pilot start
- **Duration**: 5-7 minutes
- **Frequency**: One-time
- **Participants**: All pilot developers

### Survey Questions

#### Section 1: Current Code Review Experience

**Q1. How satisfied are you with the current code review process?**
- Scale: 1-10 (1 = Very Dissatisfied, 10 = Very Satisfied)
- Required: Yes

**Q2. On average, how long does it take to get your first review on a PR?**
- Options: Less than 1 hour, 1-4 hours, 4-8 hours, 8-24 hours, More than 24 hours
- Required: Yes

**Q3. How many review iterations do your PRs typically go through before merging?**
- Options: 1, 2, 3, 4, 5 or more
- Required: Yes

**Q4. What are the biggest pain points in the current code review process? (Select all that apply)**
- Options: Long wait times, Inconsistent feedback, Missing important issues, Too many trivial comments, Reviewer availability, Other
- Required: Yes

**Q5. How confident are you that code reviews catch most bugs and issues?**
- Scale: 1-10 (1 = Not Confident, 10 = Very Confident)
- Required: Yes

#### Section 2: AI Tools Experience

**Q6. Have you used AI-powered development tools before?**
- Options: Yes, regularly; Yes, occasionally; Yes, but rarely; No, never
- Required: Yes

**Q7. If yes, which AI development tools have you used? (Select all that apply)**
- Options: GitHub Copilot, ChatGPT for coding, Tabnine, CodeT5, Other AI code tools, None
- Required: No

**Q8. How do you feel about AI assistance in code reviews?**
- Options: Very positive, Somewhat positive, Neutral, Somewhat negative, Very negative
- Required: Yes

#### Section 3: Expectations and Concerns

**Q9. What do you hope to gain from using CodeRabbit AI? (Select all that apply)**
- Options: Faster reviews, Better bug detection, Learning opportunities, Consistent feedback, Reduced review overhead, Other
- Required: Yes

**Q10. What concerns do you have about using AI for code reviews? (Select all that apply)**
- Options: Accuracy of suggestions, False positives, Privacy/security, Over-reliance on AI, Job displacement concerns, None
- Required: Yes

**Q11. Additional comments or expectations:**
- Type: Open text
- Required: No

---

## Weekly Pilot Surveys

### Survey Information
- **Timing**: Every Friday during pilot
- **Duration**: 3-5 minutes
- **Frequency**: Weekly for 8 weeks
- **Participants**: All pilot developers

### Survey Questions

#### Section 1: Weekly Experience

**Q1. How many PRs did you create this week that were reviewed by CodeRabbit?**
- Type: Number input
- Required: Yes

**Q2. Overall satisfaction with CodeRabbit this week:**
- Scale: 1-10 (1 = Very Dissatisfied, 10 = Very Satisfied)
- Required: Yes

**Q3. How accurate were CodeRabbit's suggestions this week?**
- Scale: 1-10 (1 = Mostly Incorrect, 10 = Mostly Correct)
- Required: Yes

**Q4. How useful were CodeRabbit's suggestions this week?**
- Scale: 1-10 (1 = Not Useful, 10 = Very Useful)
- Required: Yes

**Q5. Did CodeRabbit catch any bugs or issues you might have missed?**
- Options: Yes, several; Yes, a few; Yes, one; No, none that I'm aware of
- Required: Yes

#### Section 2: Impact Assessment

**Q6. Compared to last week, did CodeRabbit help reduce your PR review time?**
- Options: Significantly reduced, Somewhat reduced, No change, Somewhat increased, Significantly increased
- Required: Yes

**Q7. How has CodeRabbit affected your development workflow?**
- Options: Very positive impact, Somewhat positive, No impact, Somewhat negative, Very negative impact
- Required: Yes

**Q8. Rate the integration of CodeRabbit with your development tools:**
- Scale: 1-10 (1 = Poor Integration, 10 = Seamless Integration)
- Required: Yes

#### Section 3: Specific Feedback

**Q9. What was the most valuable suggestion CodeRabbit made this week?**
- Type: Open text
- Required: No

**Q10. What was the least helpful or most incorrect suggestion this week?**
- Type: Open text
- Required: No

**Q11. Any issues or bugs with CodeRabbit this week?**
- Type: Open text
- Required: No

---

## Mid-Pilot Comprehensive Survey

### Survey Information
- **Timing**: Week 4-5 of pilot
- **Duration**: 10-12 minutes
- **Frequency**: One-time
- **Participants**: All pilot developers

### Survey Questions

#### Section 1: Overall Experience

**Q1. Overall satisfaction with CodeRabbit after 4 weeks:**
- Scale: 1-10 (1 = Very Dissatisfied, 10 = Very Satisfied)
- Required: Yes

**Q2. How has your opinion of AI code review changed since starting the pilot?**
- Options: Much more positive, Somewhat more positive, No change, Somewhat more negative, Much more negative
- Required: Yes

**Q3. Would you want to continue using CodeRabbit after the pilot?**
- Options: Definitely yes, Probably yes, Unsure, Probably no, Definitely no
- Required: Yes

#### Section 2: Detailed Impact Analysis

**Q4. How has CodeRabbit affected your code quality?**
- Scale: 1-10 (1 = Much Worse, 5 = No Change, 10 = Much Better)
- Required: Yes

**Q5. How has CodeRabbit affected your review time?**
- Scale: 1-10 (1 = Much Slower, 5 = No Change, 10 = Much Faster)
- Required: Yes

**Q6. How has CodeRabbit affected your learning and skill development?**
- Scale: 1-10 (1 = No Learning, 10 = Significant Learning)
- Required: Yes

**Q7. Rate CodeRabbit's performance in these areas:**

| Category | Poor (1-2) | Fair (3-4) | Good (5-6) | Great (7-8) | Excellent (9-10) |
|----------|------------|------------|------------|-------------|------------------|
| Bug detection | □ | □ | □ | □ | □ |
| Security issues | □ | □ | □ | □ | □ |
| Code style | □ | □ | □ | □ | □ |
| Performance issues | □ | □ | □ | □ | □ |
| Best practices | □ | □ | □ | □ | □ |
| Documentation | □ | □ | □ | □ | □ |

Required: Yes

#### Section 3: Process and Integration

**Q8. How well does CodeRabbit integrate with your existing workflow?**
- Scale: 1-10 (1 = Very Poor, 10 = Excellent)
- Required: Yes

**Q9. How do you typically respond to CodeRabbit suggestions? (Select all that apply)**
- Options: Implement immediately, Review and implement if valid, Discuss with team first, Often ignore, Rarely implement
- Required: Yes

**Q10. What percentage of CodeRabbit suggestions do you typically implement?**
- Options: 0-20%, 21-40%, 41-60%, 61-80%, 81-100%
- Required: Yes

#### Section 4: Improvement Suggestions

**Q11. What improvements would you most like to see in CodeRabbit? (Select top 3)**
- Options: Fewer false positives, More accurate suggestions, Better context understanding, Faster response time, More detailed explanations, Better integration, Custom rules, Other
- Required: Yes

**Q12. Detailed feedback on CodeRabbit's strengths:**
- Type: Open text
- Required: No

**Q13. Detailed feedback on CodeRabbit's weaknesses:**
- Type: Open text
- Required: No

**Q14. Suggestions for improving the pilot process:**
- Type: Open text
- Required: No

---

## Post-Pilot Final Survey

### Survey Information
- **Timing**: Final week of pilot
- **Duration**: 8-10 minutes
- **Frequency**: One-time
- **Participants**: All pilot developers

### Survey Questions

#### Section 1: Final Assessment

**Q1. Final overall satisfaction with CodeRabbit:**
- Scale: 1-10 (1 = Very Dissatisfied, 10 = Very Satisfied)
- Required: Yes

**Q2. Would you recommend CodeRabbit for company-wide adoption?**
- Options: Strongly recommend, Somewhat recommend, Neutral, Somewhat oppose, Strongly oppose
- Required: Yes

**Q3. How likely are you to continue using CodeRabbit personally?**
- Scale: 1-10 (1 = Very Unlikely, 10 = Very Likely)
- Required: Yes

#### Section 2: Impact Summary

**Q4. Overall impact of CodeRabbit on your productivity:**
- Options: Significantly increased, Somewhat increased, No change, Somewhat decreased, Significantly decreased
- Required: Yes

**Q5. Overall impact of CodeRabbit on your code quality:**
- Options: Significantly improved, Somewhat improved, No change, Somewhat worse, Significantly worse
- Required: Yes

**Q6. Overall impact of CodeRabbit on your learning:**
- Options: Learned a lot, Learned some things, No impact, Neutral
- Required: Yes

**Q7. How has CodeRabbit changed your code review habits?**
- Type: Open text
- Required: No

#### Section 3: Comparison and ROI

**Q8. Compared to traditional code reviews, CodeRabbit is:**
- Much better, Somewhat better, About the same, Somewhat worse, Much worse
- Required: Yes

**Q9. If CodeRabbit costs $X per developer per month, would you consider it worth it?**
- Note: Insert actual pricing information
- Options: Definitely worth it, Probably worth it, Unsure, Probably not worth it, Definitely not worth it
- Required: Yes

**Q10. What's the maximum you'd pay per developer per month for CodeRabbit?**
- Options: $0, $1-10, $11-25, $26-50, $51-100, Over $100
- Required: Yes

#### Section 4: Final Recommendations

**Q11. What would make CodeRabbit a "must-have" tool for your team?**
- Type: Open text
- Required: No

**Q12. What are the top 3 improvements needed before full adoption?**
- Type: Open text
- Required: No

**Q13. Any final thoughts or recommendations?**
- Type: Open text
- Required: No

---

## PR-Level Feedback Form

### Form Information
- **Timing**: Optional after each PR review
- **Duration**: 1-2 minutes
- **Frequency**: As needed
- **Access**: Quick link in PR comments

### Quick Feedback Questions

**Q1. Rate CodeRabbit's review of this PR:**
- Scale: 1-5 stars
- Required: Yes

**Q2. Were there any false positives in this review?**
- Options: Yes (many), Yes (a few), No
- Required: Yes

**Q3. Did CodeRabbit miss any important issues?**
- Options: Yes (several), Yes (one or two), No
- Required: Yes

**Q4. Quick feedback on this review:**
- Type: Short text (optional)
- Required: No

---

## Survey Administration

### Distribution Method
- **Platform**: Google Forms / Microsoft Forms / Internal survey tool
- **Delivery**: Email links + Slack reminders
- **Anonymous Options**: Available for all surveys
- **Mobile Friendly**: All surveys optimized for mobile

### Response Tracking
- **Target Response Rate**: >80% for weekly surveys, >90% for milestone surveys
- **Reminder Schedule**: Initial invite, 3-day reminder, final reminder
- **Incentives**: Consider small rewards for consistent participation

### Data Analysis
- **Weekly Analysis**: Trend tracking and quick insights
- **Milestone Analysis**: Comprehensive analysis with cross-tabulation
- **Final Analysis**: Complete statistical analysis and recommendations

---

**Document Version**: 1.0  
**Last Updated**: [Current Date]  
**Related Documents**: CodeRabbit Pilot Program Plan, Metrics Collection Plan  
**Survey Platform**: [To be determined based on company tools] 