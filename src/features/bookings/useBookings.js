import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';

export const useBookings = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['bookings_xx'],
    queryFn: getBookings,
  });
  return { data, isLoading, error };
};
