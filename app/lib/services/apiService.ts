const isDevMode = process.env.NODE_ENV === 'development';

const apiService = {
  services: {
    get: async (options: Record<string | number, any> = { limit: null, categoryId: null, categoryName: null }) => {
      try {
        let urlSearchParams = new URLSearchParams();

        if (options.limit) {
          urlSearchParams.append('limit', options.limit.toString());
        }

        if (options.categoryId) {
          urlSearchParams.append('categoryId', options.categoryId.toString());
        }

        if (options.categoryName) {
          urlSearchParams.append('categoryName', options.categoryName.toString());
        }

        const uri = urlSearchParams.size > 0 ? `/api/services?${urlSearchParams.toString()}` : `/api/services`;
        const response = await fetch(process.env.NEXT_PUBLIC_HOST + uri, {
          next: { revalidate: isDevMode ? 0 : 1000 * 60 },
        });
        const data = await response.json();

        if (response.status > 200) {
          return {
            success: false,
            data,
          };
        }

        return {
          success: true,
          data: data.data,
        };
      } catch (error) {
        return {
          success: false,
          data: error,
        };
      }
    },
    getServiceDetails: async (id: string | null = null) => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_HOST + `/api/services/details/${id}`, {
          next: { revalidate: isDevMode ? 0 : 1000 * 60 },
        });

        const data = await response.json();

        if (response.status > 200) {
          return {
            success: false,
            data,
          };
        }

        return {
          success: true,
          data: data.data,
        };
      } catch (error) {
        return {
          success: false,
          data: error,
        };
      }
    },
  },
  categories: {
    get: async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/categories', {
          next: { revalidate: isDevMode ? 0 : 1000 * 60 },
        });

        const data = await response.json();

        if (response.status > 200) {
          return {
            success: false,
            data,
          };
        }

        return {
          success: true,
          data: data.data,
        };
      } catch (error) {
        return {
          success: false,
          data: error,
        };
      }
    },
  },
  checkout: {
    post: async (amount: number) => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: amount,
          }),
        });

        const data = await response.json();

        return {
          success: true,
          data,
        };
      } catch (error) {
        return {
          success: false,
          data: error,
        };
      }
    },
  },
  orders: {
    post: async (payload: any) => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/orders/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${payload.token ? payload.token : ''}`,
          },
          body: JSON.stringify(payload.data),
        });

        const data = await response.json();

        return {
          success: true,
          data: data.data,
        };
      } catch (error) {
        return {
          success: false,
          data: error,
        };
      }
    },
    getOrderDetails: async ({ id, token }: { id: string | null; token: string }) => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_HOST + `/api/orders/details/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          next: { revalidate: isDevMode ? 0 : 1000 * 60 },
        });

        const data = await response.json();

        if (response.status > 200) {
          return {
            success: false,
            data,
          };
        }

        return {
          success: true,
          data: data.data,
        };
      } catch (error) {
        return {
          success: false,
          data: error,
        };
      }
    },
  },
};

export default apiService;
