use anchor_lang::prelude::*;

declare_id!("FZohJ5YWdyBSFV3UafiE3Dw19kTcvLGajTB2jKKoemhY");

#[program]
pub mod nftauction {
    use super::*;
    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {

    }
}

#[derive(Accounts)]
pub struct Initialize {}

#[account]
pub struct NFT {
    dna : String,
    url : String,
    price : f32,
    collection : String,
    
}
