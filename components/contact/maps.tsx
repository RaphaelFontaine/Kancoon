import { AspectRatio } from '@mantine/core';

export function MapsMap() {
  return (
    <div className="bp:w-1/2 w-full relative pt-[56.25%] bp:pt-[28.125%] overflow-hidden ">
            <iframe
                    scrolling="no"
                    src="https://www.google.com/maps?ll=46.518944,-1.781432&z=10&t=m&hl=fr&gl=US&mapclient=embed&q=19+Rue+Cl%C3%A9ment+Ader+85340+Les+Sables-d%27Olonne"
                    title="Google map"
                    frameBorder="10"
            />
        </div>
  );
}
