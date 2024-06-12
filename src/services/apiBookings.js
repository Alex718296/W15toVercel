import supabase, { supabaseUrl } from './supabase';

export const getBooking = async (id) => {
  const { data, error } = await supabase
    .from('bookings_xx')
    .select('*, cabins_xx(*), guests_xx(*)')
    .eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
};
