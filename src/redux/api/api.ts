import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/"}),
    tagTypes: ['todo'],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () =>({
                url: "/api/tasks",
                method: 'GET'
            }),
            providesTags: ['todo'],
        }),
        addTodo: builder.mutation({
            query: (data) =>{
                console.log("inside base api =>", data);
                return {
                    url: "/api/tasks",
                    method: 'POST',
                    body: data
                }
            },
            invalidatesTags: ['todo'],
        })
    })
})

export const {useGetTodosQuery, useAddTodoMutation} = baseApi;