export type PageRoute = 
  | '/' 
  | '/about' 
  | '/gameplay' 
  | '/levels' 
  | '/features' 
  | '/preview' 
  | '/team';

export interface LevelItem {
  id: string;
  number: string;
  title: string;
  description: string;
  objective: string;
  location: string;
  interactables: string[];
  status: 'IN DEVELOPMENT';
  image: string;
  tag: string;
  challengeSample?: {
    question: string;
    type: string;
    hint: string;
  };
}

export interface ChallengeItem {
  id: string;
  level: string;
  question: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Critical';
  context: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: 'Compass' | 'Hand' | 'Cpu' | 'HelpCircle' | 'DoorClosed' | 'FlaskConical';
  badge: string;
}

export interface GalleryMockupItem {
  id: string;
  title: string;
  category: 'Main Menu' | 'Setting' | 'Level 1' | 'Question' | 'Level 2' | 'Level 3' | 'Game Over' | 'You Escaped';
  description: string;
  pageRef: string;
  image: string;
  aspectRatio: string;
  highlights: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  division: string;
  status: string;
}
