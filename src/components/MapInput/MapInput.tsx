'use client'

import React, { useEffect, useRef } from 'react';
import { useControlled } from '@/hooks';
import Leaflet, { Map } from 'leaflet';
import clsx from 'clsx';
import 'leaflet/dist/leaflet.css';
import './MapInput.scss';

const fallbackCoordination = { lat: 35.689015, lng: 51.388759 };

const markerIcon = Leaflet.icon({
    iconUrl: '/marker-icon.png',
    iconSize: [25, 41], // [x, y] in pixels
    iconAnchor: [12, 41],
});


type PropsType = {
    className: string;
    defaultValue?: { lat: number; lng: number };
    value?: { lat: number; lng: number };
    onChange?(arg: { lat: number; lng: number }): void;
};


export const MapInput = (props: PropsType) => {

    const {
        className,
        value: propValue,
        defaultValue,
        onChange
    } = props;

    const [value, setValue] = useControlled<any>({
        controlled: propValue,
        default: defaultValue
    });

    const mapContainer = useRef<HTMLDivElement>(null);

    const map = useRef<Map>();

    const selectedMaker = useRef<L.Layer>();


    useEffect(() => {
        if (map.current) return;

        map.current = Leaflet.map((mapContainer.current as HTMLElement), {
            center: value || fallbackCoordination,
            zoom: 11,
            layers: [
                Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }),
            ],
        });
        map.current.on('click', (e: L.LeafletMouseEvent): void => {
            setValue(e.latlng);
            onChange?.(e.latlng);
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [map]);


    if (value && map.current) {
        if (selectedMaker.current) map.current.removeLayer(selectedMaker.current);
        selectedMaker.current = Leaflet.marker(value, { icon: markerIcon }).addTo(map.current);
    }

    return <div className={clsx("uiMapInput", className)} ref={mapContainer} />;
}

MapInput.displayName = "MapInput";
