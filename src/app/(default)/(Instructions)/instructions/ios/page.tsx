import InstructionsApi from "@/components/UI/primitives/InstructionsApi/InstructionsApi";

export default function IosPage() {
    return (
        <section className='ios container reset-padding-mobile margin-top' style={{ paddingBlock: '5px' }}>
            <InstructionsApi variant='ios' />
        </section>
    )
}