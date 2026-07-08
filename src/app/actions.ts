import { insertRows } from '../../egdesk-helpers';

export async function submitInquiry(prevState: any, formData: FormData) {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !phone) {
    return { success: false, error: '성함과 연락처는 필수 입력 항목입니다.' };
  }

  try {
    // Try inserting into inquiries table
    await insertRows('inquiries', [{
      name,
      phone,
      email: email || '',
      message: message || '',
      created_at: new Date().toISOString()
    }]);
    return { success: true };
  } catch (err: any) {
    console.error('Error saving to inquiries table, attempting fallback to example_table:', err);
    try {
      // Fallback to example_table if inquiries is not synced yet
      await insertRows('example_table', [{
        name: `Inquiry from ${name} (${phone}): ${message || ''}`,
        created_at: new Date().toISOString()
      }]);
      return { success: true, note: 'Saved to fallback table.' };
    } catch (fallbackErr: any) {
      console.error('Database save failed:', fallbackErr);
      // On static hosting (like Dothome), DB insertion will fail because there is no API proxy.
      // We return success: true with a note so the user is still redirected to the SMS sending window.
      return { success: true, note: 'db_failed_sms_fallback' };
    }
  }
}
