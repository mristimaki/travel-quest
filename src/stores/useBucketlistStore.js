import { create } from 'zustand'

// Global store for managing bucketlist destinations
const useBucketlistStore = create((set) => ({
    destinations: [],
    
    addDestination: (destination) => {
        set((state) => {
            const alreadyExixts = state.destinations.some(
                (d) => d.cca3 === destination.cca3
            )
            if (alreadyExixts) return state
            return { destinations: [...state.destinations, destination] }
        })
    },

    removeDestination: (destinationId) => {
        set((state) => ({
            destinations: state.destinations.filter((destination) => destination.cca3 !== destinationId)
        }))
    }
}))

export default useBucketlistStore