import { describe, it, expect } from 'vitest';
import { getDb } from './db';
import { methodologyAssessments } from '../drizzle/schema';

describe('Methodology Assessment Form', () => {
  it('should create methodology assessment request in database', async () => {
    // Insert test data
    const testAssessment = {
      agencyName: 'Test Agency',
      contactName: 'Test Contact',
      email: 'test@agency.gov',
      phone: '555-1234',
      authorizationStatus: 'in-progress',
      complianceFramework: 'fedramp',
      additionalDetails: 'Test details',
    };

    const db = await getDb();
    if (!db) throw new Error('Database not available');
    
    const [inserted] = await db.insert(methodologyAssessments).values(testAssessment).returning();

    expect(inserted).toBeDefined();
    expect(inserted.agencyName).toBe('Test Agency');
    expect(inserted.email).toBe('test@agency.gov');
    expect(inserted.authorizationStatus).toBe('in-progress');
    expect(inserted.complianceFramework).toBe('fedramp');

    console.log('✅ Methodology assessment created successfully:', inserted);
  });

  it('should retrieve methodology assessments from database', async () => {
    const db = await getDb();
    if (!db) throw new Error('Database not available');
    
    const assessments = await db.select().from(methodologyAssessments).limit(5);
    
    console.log(`✅ Found ${assessments.length} methodology assessment(s) in database`);
    
    if (assessments.length > 0) {
      console.log('Latest assessment:', assessments[0]);
    }
    
    expect(Array.isArray(assessments)).toBe(true);
  });
});
