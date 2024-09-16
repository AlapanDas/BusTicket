import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
     return {
          name: 'MyBusTicket',
          short_name: 'BusTicket',
          description: 'MyBusTicket: Your Kolkata Bus Guru',
          start_url: '/',
          display: 'standalone',
          background_color: '#ffffff',
          theme_color: '#B3232E',
          icons: [
               {
                    src: 'apple-touch-icon.png', // Corresponds to the apple-touch-icon link
                    sizes: '180x180',
                    type: 'image/png',
               },
               {
                    src: '../public/favicon-32x32.png',
                    sizes: '32x32',
                    type: 'image/png',
               },
               {
                    src: '../public/favicon-16x16.png',
                    sizes: '16x16',
                    type: 'image/png',
               },
               {
                    src: '../public//icon-192x192.png',
                    sizes: '192x192',
                    type: 'image/png',
               },
               //  {
               //      src:'/fa'
               //  },
               {
                    src: '../public/icon-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
               },
          ],
          shortcuts: [
               {
                    name: 'BusTicket Home',
                    url: '/',
               },
          ],
     }
}