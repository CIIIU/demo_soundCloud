'use client'
import { useSearchParams } from 'next/navigation'
import WaveTrack from '@/components/track/wave.track';
import { Container } from '@mui/material';

const DetailTrackPage = (props: any) => {
    const {params} = props;
    const searchParams = useSearchParams()
    const search = searchParams.get('audio')

    console.log(">>> check search: ", search)

    return (
        <Container>
            <div>
                <WaveTrack/>
            </div>
        </Container>
    )
}

export default DetailTrackPage