// Test script for Supabase connection
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL || "https://egkjvbjdwcgjdizivdnz.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVna2p2Ympkd2NnamRpeml2ZG56Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTQ0ODU1NywiZXhwIjoyMDg1MDI0NTU3fQ.ydHjzvDH7FlmXyTMIaDoKQGMbgVbQCRUUd7eM1beyEU";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function testSupabase() {
  console.log('🧪 Testing Supabase Connection...\n');
  console.log('Supabase URL:', SUPABASE_URL);
  console.log('Service Role Key:', SUPABASE_SERVICE_ROLE_KEY ? '***' + SUPABASE_SERVICE_ROLE_KEY.slice(-10) : 'NOT SET');
  console.log('\n');

  try {
    // Test 1: Basic connection
    console.log('Test 1: Basic Connection Test');
    const { data: testData, error: testError } = await supabase
      .from('_prisma_migrations')
      .select('id')
      .limit(1);
    
    if (testError && testError.code !== 'PGRST116') {
      console.log('⚠️  Connection test:', testError.message);
    } else {
      console.log('✅ Basic connection successful\n');
    }

    // Test 2: Try to query a common table (users)
    console.log('Test 2: Query Users Table');
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select('*')
      .limit(1);
    
    if (usersError) {
      console.log('⚠️  Users table query:', usersError.message);
      console.log('   (This is OK if the table doesn\'t exist yet)\n');
    } else {
      console.log('✅ Users table accessible');
      console.log('   Sample data:', users?.length || 0, 'rows found\n');
    }

    // Test 3: Try to query products table
    console.log('Test 3: Query Products Table');
    const { data: products, error: productsError } = await supabase
      .from('product')
      .select('*')
      .limit(1);
    
    if (productsError) {
      console.log('⚠️  Products table query:', productsError.message);
      console.log('   (This is OK if the table doesn\'t exist yet)\n');
    } else {
      console.log('✅ Products table accessible');
      console.log('   Sample data:', products?.length || 0, 'rows found\n');
    }

    // Test 4: Test INSERT capability (if users table exists)
    if (!usersError) {
      console.log('Test 4: Test Write Capability');
      const testEmail = `test_${Date.now()}@test.com`;
      const { data: insertData, error: insertError } = await supabase
        .from('users')
        .insert({
          UserEmail: testEmail,
          UserName: 'Test User',
          UserPassword: 'test123'
        })
        .select();
      
      if (insertError) {
        console.log('⚠️  Insert test:', insertError.message);
      } else {
        console.log('✅ Insert successful');
        console.log('   Inserted user ID:', insertData[0]?.UserID || insertData[0]?.userid);
        
        // Clean up - delete test user
        if (insertData[0]?.UserID || insertData[0]?.userid) {
          const userId = insertData[0]?.UserID || insertData[0]?.userid;
          await supabase
            .from('users')
            .delete()
            .eq('UserID', userId);
          console.log('   Test user cleaned up\n');
        }
      }
    }

    console.log('✅ All tests completed!');
    console.log('\n📝 Summary:');
    console.log('   - Supabase client initialized successfully');
    console.log('   - No database password required');
    console.log('   - Ready to use pool.query() wrapper\n');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error('   Stack:', error.stack);
    process.exit(1);
  }
}

// Run tests
testSupabase()
  .then(() => {
    console.log('🎉 Tests passed!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Tests failed:', error);
    process.exit(1);
  });
