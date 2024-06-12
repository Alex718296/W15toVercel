import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';

export const useBookings = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['bookings_91'],
    queryFn: getBookings,
  });
  return { data, isLoading, error };
};
