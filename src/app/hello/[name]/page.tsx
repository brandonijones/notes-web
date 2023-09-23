import React from 'react'

type Params = {
    params: {
        name: string
    }
}

export default function HelloName({ params: { name } }: Params) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">Hello, {name}!</div>
    )
}
