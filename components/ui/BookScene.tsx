'use client';
import React, { useRef, useState } from 'react';
import { useFrame, useLoader, ThreeEvent } from '@react-three/fiber';
import { RoundedBox, Text3D } from '@react-three/drei';
import * as THREE from 'three';
import { Group, Mesh } from 'three';
import robotoFont from '@/public/fonts/Roboto_Regular.json';
import { jelovnik } from '@/types/jelovnik';

const PAPER_COLOR = '#FBF7EF';
const WIDTH = 2;
const HEIGHT = 4;
const THICKNESS = 0.2;
const COVER_THICKNESS = 0.02;

// KONSTANTE ZA ANIMACIJU
const PIVOT_X = -WIDTH / 2;
const COVER_CENTER_X = WIDTH / 2;
const HALF_WIDTH = WIDTH / 2;

const BookScene = () => {
  const bookRef = useRef<Group>(null!);
  const coverRef = useRef<Group>(null!); 
  const pagesRef = useRef<Group[]>([]);
  const pageMeshesRef = useRef<Mesh[]>([]);

  const [isCoverOpened, setIsCoverOpened] = useState(false);
  const [openedPages, setOpenedPages] = useState<boolean[]>(new Array(jelovnik.length).fill(false));

  // Učitavanje tekstura kože
  const colorMap = useLoader(THREE.TextureLoader, '/textures/Leather003_1K-JPG_Color.jpg');
  const normalMap = useLoader(THREE.TextureLoader, '/textures/Leather003_1K-JPG_NormalGL.jpg');
  const displacementMap = useLoader(THREE.TextureLoader, '/textures/Leather003_1K-JPG_Displacement.jpg');

  [colorMap, normalMap, displacementMap].forEach((tex) => {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(1.2, 1.2); 
    tex.anisotropy = 8;
  });

  // Handler za klik na korice
  const handleCoverClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    const hasOpenedPages = openedPages.some(isOpened => isOpened);
    if (hasOpenedPages) {
      setOpenedPages(new Array(jelovnik.length).fill(false));
    } else {
      setIsCoverOpened(!isCoverOpened);
    }
  };

  // Handler za klik na stranicu
  const handlePageClick = (event: ThreeEvent<MouseEvent>, pageIndex: number) => {
    event.stopPropagation();
    const newOpenedPages = [...openedPages];
    newOpenedPages[pageIndex] = !newOpenedPages[pageIndex];
    setOpenedPages(newOpenedPages);
  };

  // Animacija
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Lagano disanje knjige
    bookRef.current.rotation.y = THREE.MathUtils.lerp(bookRef.current.rotation.y, Math.sin(t / 4) * 0.05, delta * 2);
    bookRef.current.rotation.x = THREE.MathUtils.lerp(bookRef.current.rotation.x, Math.cos(t / 6) * 0.02, delta * 2);

    // Animacija korice
    if (coverRef.current) {
      const coverTargetRotation = isCoverOpened ? -Math.PI * 0.95 : 0;
      coverRef.current.rotation.y = THREE.MathUtils.lerp(coverRef.current.rotation.y, coverTargetRotation, delta * 5);
    }

    // Animacija stranica
    pagesRef.current.forEach((pageRef, index) => {
      if (pageRef) {
        const pageTargetRotation = openedPages[index] ? -Math.PI * 0.9 : 0;
        pageRef.rotation.y = THREE.MathUtils.lerp(pageRef.rotation.y, pageTargetRotation, delta * 4);
      }
    });
  });

  const coverWidth = WIDTH * 0.98;
  const coverMaterialProps = {
    map: colorMap,
    normalMap: normalMap,
    displacementMap: displacementMap,
    displacementScale: 0.03,
    roughness: 0.85,
    metalness: 0.05,
    clearcoat: 0.25,
    clearcoatRoughness: 0.6,
  };
  const coverPositionZ = THICKNESS / 2 + COVER_THICKNESS / 2;

  // Dinamičke stranice
  const pageWidth = WIDTH * 0.92;
  const pageHeight = HEIGHT * 0.95;
  const pageDepth = 0.02;
  const pages = [];

  for (let i = 0; i < jelovnik.length; i++) {
    const PAGE_SPACING = 0.025;
    const totalThickness = (jelovnik.length - 1) * PAGE_SPACING;
    const startOffset = totalThickness / 2;
    const pageZPosition = -(i * PAGE_SPACING - startOffset);
    const kategorija = jelovnik[i];

    pages.push(
      <group
        key={`page-${i}`}
        ref={el => { if (el) pagesRef.current[i] = el; }}
        position={[PIVOT_X, 0, pageZPosition]}
      >
        <mesh 
          position={[pageWidth / 2, 0, 0]}
          ref={el => { if (el) pageMeshesRef.current[i] = el; }}
          onClick={(event) => handlePageClick(event, i)}
          onPointerOver={() => document.body.style.cursor = 'pointer'}
          onPointerOut={() => document.body.style.cursor = 'default'}
        >
          <boxGeometry args={[pageWidth, pageHeight, pageDepth]} />
          <meshStandardMaterial color={PAPER_COLOR} roughness={0.7} metalness={0.1} side={THREE.DoubleSide} />
        </mesh>

        {/* TEKST NA STRANICI */}
        <group position={[pageWidth / 2, 0, pageDepth / 2 + 0.001]}>
          {/* Naslov kategorije */}
          <group position={[-pageWidth * 0.35, pageHeight * 0.35, 0]}>
            <Text3D font={robotoFont as any} size={0.15} height={0.02} position={[0,0,0]}>
              {kategorija.naziv}
              <meshPhysicalMaterial color="#8B4513" metalness={0} roughness={0.5} />
            </Text3D>
          </group>

          {/* Stavke jelovnika */}
          {kategorija.stavke.map((stavka, stavkaIndex) => (
            <group key={stavkaIndex} position={[-pageWidth * 0.35, pageHeight * (0.25 - stavkaIndex * 0.12), 0]}>
              {/* NAZIV JELA - LEVA STRANA */}
              <Text3D font={robotoFont as any} size={0.06} height={0.01} position={[-0.15, 0, 0]}>
                {stavka.naziv}
                <meshPhysicalMaterial color="#5D4037" metalness={0} roughness={0.6} />
              </Text3D>

              {/* CENA - DESNA STRANA, ispod naziva */}
              <Text3D font={robotoFont as any} size={0.06} height={0.01} position={[pageWidth * 0.62, -0.08, 0]}>
                {stavka.cena}
                <meshPhysicalMaterial color="#D84315" metalness={0} roughness={0.6} />
              </Text3D>
            </group>
          ))}
        </group>
      </group>
    );
  }

  return (
    <group ref={bookRef}>
      {/* Prednja korica */}
      <group ref={coverRef} position={[PIVOT_X, 0, 0]} onClick={handleCoverClick} onPointerOver={() => document.body.style.cursor='pointer'} onPointerOut={() => document.body.style.cursor='default'}>
        <RoundedBox args={[coverWidth, HEIGHT, COVER_THICKNESS]} radius={0.05} smoothness={6} position={[COVER_CENTER_X,0,coverPositionZ]}>
          <meshPhysicalMaterial {...coverMaterialProps} />
        </RoundedBox>
        <Text3D font={robotoFont as any} size={0.22} height={0.05} bevelEnabled bevelThickness={0.01} bevelSize={0.02} curveSegments={12} position={[HALF_WIDTH * 0.3 + 0.1, HEIGHT * 0.25, coverPositionZ + 0.001]}>
          {"Restoran"}
          <meshPhysicalMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.1} metalness={0} roughness={0.5} clearcoat={1} clearcoatRoughness={0.2} />
        </Text3D>
        <Text3D font={robotoFont as any} size={0.22} height={0.05} bevelEnabled bevelThickness={0.01} bevelSize={0.02} curveSegments={12} position={[HALF_WIDTH * 0.2 + 0.1, HEIGHT * 0.12, coverPositionZ + 0.001]}>
          {"Naša Priča"}
          <meshPhysicalMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.1} metalness={0} roughness={0.5} clearcoat={1} clearcoatRoughness={0.2} />
        </Text3D>
      </group>

      {/* Zadnja korica */}
      <RoundedBox args={[coverWidth, HEIGHT, COVER_THICKNESS]} radius={0.05} smoothness={6} position={[0, 0, -(THICKNESS / 2 + COVER_THICKNESS / 2)]} onClick={handleCoverClick} onPointerOver={() => document.body.style.cursor='pointer'} onPointerOut={() => document.body.style.cursor='default'}>
        <meshPhysicalMaterial {...coverMaterialProps} />
      </RoundedBox>

      {/* Kićma */}
      <RoundedBox args={[WIDTH - coverWidth + 0.02, HEIGHT, THICKNESS]} radius={0.02} smoothness={4} position={[-(WIDTH - coverWidth) / 2 - coverWidth / 2 + 0.01, 0, 0]}>
        <meshPhysicalMaterial {...coverMaterialProps} />
      </RoundedBox>

      {/* Dinamičke stranice */}
      {pages}
    </group>
  );
};

export default BookScene;
