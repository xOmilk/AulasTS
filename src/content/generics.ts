type ApiResponse<Data> = {
    data: Data
    isError: boolean
}

type UserResponse = ApiResponse<{ name: string, age: number }>
type BlogResponse = ApiResponse<{ title: string }>


const response: UserResponse = {
    data: {
        name: 'Gabriel',
        age: 21
    },
    isError: false

}


