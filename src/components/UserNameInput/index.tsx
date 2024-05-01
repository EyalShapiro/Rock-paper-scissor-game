import useInputUserName from "./useInput";

export default function InputUser({ onClick }: props) {
	const { userContextInput, inputValue, setInputValue } = useInputUserName();

	return (
		<div>
			<input
				value={inputValue}
				onChange={(value: React.ChangeEvent<HTMLInputElement>) =>
					setInputValue(value.target.value)
				}
			/>
			<button type='submit' onClick={() => onClick()}>
				submit
			</button>
		</div>
	);
}
interface props {
	onClick: () => void;
}
