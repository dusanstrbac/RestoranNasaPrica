import Jelovnik3D from "@/components/Jelovnik3D";
import Navigacija from "@/components/Navigacija";

export default function JelovnikStrana() {
  return (
    <div>
        <div>
            <Navigacija />
        </div>
        <Jelovnik3D />
    </div>
  );
}
