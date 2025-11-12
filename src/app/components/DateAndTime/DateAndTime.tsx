type Props ={
    date: string
    prefix?: string
}

export default function DateAndTime({date, prefix}:Props){
    const formatted = new Intl.DateTimeFormat('no',{
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }).format(new Date(date))
    return <time>{prefix ? `${prefix} ${formatted}`: formatted}</time>
}