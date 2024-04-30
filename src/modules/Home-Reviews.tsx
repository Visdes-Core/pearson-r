import ReviewCard from "./Home-Reviews-Card"

import profileDummy from '../assets/profile-pict-dummy.svg';
import uiIcon from '../assets/ui-icon.svg';
import ugmIcon from '../assets/ugm-icon.svg';
import itbIcon from '../assets/itb-icon.svg';

const reviewer = [
    { profile: profileDummy, university: itbIcon, review: 'MATCHMAJOR membantu saya menemukan passion dalam Teknik Informatika. Dengan chat langsung bersama mahasiswa-mahasiswa yang sudah berada di jurusan ini, saya semakin yakin dan nyaman dengan pilihan jurusan saya', name: 'Bulan', major: 'Informatika - Institut Teknologi Bandung'},
    { profile: profileDummy, university: ugmIcon, review: 'Saya sangat bersyukur menemukan MATCHMAJOR. Melalui platform ini, saya dapat berinteraksi langsung dengan mahasiswa Ilmu Komunikasi. Mereka membantu saya memahami lebih dalam tentang lingkungan akademik dan materi kuliah di jurusan ini.', name: 'Azmy', major: 'Ilmu Komunikasi - Universitas Gadjah Mada'},
    { profile: profileDummy, university: uiIcon, review: 'MATCHMAJOR membantu saya menemukan passion dalam Teknik Informatika. Dengan chat langsung bersama mahasiswa-mahasiswa yang sudah berada di jurusan ini, saya semakin yakin dan nyaman dengan pilihan jurusan saya.', name: 'Fathan', major: 'Psikologi - Universitas Indonesia' }
];

export default function Reviews() {
    return (
        <div className="flex flex-col h-[720px] gap-[58px] pt-24 items-center">
            <div className="text-[color:var(--Dark-Blue,#243F73)] text-center text-5xl not-italic font-bold leading-[80px] text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25) font-family: Poppins;">
                Ulasan <span className="text-[color:var(--Dark-Blue,#243F73)] text-5xl not-italic font-medium leading-[80px] font-family: Poppins;">dari yang</span> Gak Salah Jurusan!
            </div>
            <div className="flex flex-row gap-[48px]">
                {reviewer.map((review, index) => (
                    <ReviewCard 
                        key= {index}
                        university= {review.university}
                        photo= {review.profile}
                        review= {review.review}
                        name= {review.name}
                        major= {review.major}
                    />
                ))}
            </div>
        </div>
    )
}