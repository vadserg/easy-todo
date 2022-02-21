import React from 'react'
import { BsCheck } from 'react-icons/bs'
import cn from 'classnames'

const Check = ({ isCompleted }) => {
	return (
		<div
			className={cn(
				'flex items-center border-2 rounded-lg border-pink-500 w-6 h-6 mr-3',
				{
					'bg-pink-500': isCompleted,
				}
			)}
		>
			{isCompleted && <BsCheck size={26} className='text-gray-600' />}
		</div>
	)
}

export default Check

/* 2-ой вариант без доп. библиотеки <div className={`flex items-center border-2 rounded-lg border-pink-500 ${isCompleted ? 'bg-pink-500' : ''} w-6 h-6 mr-3 my-auto`} > */
